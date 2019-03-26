import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchServices, selectService } from '../actions/schedulerActions';
import '../App.css';
import ServicesMin from './ServicesMin';

class Services extends Component{

	constructor(props){
		super(props)
		this.ref = React.createRef()
		
	}

	state = {
		show:true
	}

	componentDidMount = () => {
		this.props.fetchServices(1)
	}

	click = (e, service) => {

		this.props.selectService(service)
		this.setState({clientY:e.clientY})
	}

	toggleShow = () => {
		this.setState({show:!this.state.show})
	}

	render(){
		const services = this.props.services.map((service)=>{
			return (
				<div className="service-container" key={service.name} onClick={(e) => this.click(e, service)}>
					<div>{service.name}</div>
					<div>{service.description}</div>
					<div>{service.duration}min</div>
					<div>${service.price}</div>

				</div>
			)	
		})

		if(isEmpty(this.props.selectedService)){

			return(
				<div ref={this.ref} id="services"> 
					{services} 
				</div>
			)
		}
		return(<ServicesMin clientY={this.state.clientY}/>)
		
	}
}

const mapStateToProps = state => ({
	services:state.schedulerReducer.services,
	selectedService:state.schedulerReducer.selectedService

})

const isEmpty = obj => {
	if(Object.keys(obj).length === 0){
		return true
	}
	return false
}

export default connect(mapStateToProps, { fetchServices, selectService })(Services);