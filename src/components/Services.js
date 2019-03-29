import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchServices, selectService, setStage } from '../actions/schedulerActions';
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
		this.props.setStage(2)
		this.setState({clientY:e.clientY})
	}

	toggleShow = () => {
		this.setState({show:!this.state.show})
	}

	render(){
		const services = this.props.services.map((service)=>{
			return (
				<div className="service-container shadow" key={service.name} onClick={(e) => this.click(e, service)}>
					<div><span className="service-name med">{service.name}</span></div>
					<div><span className="grey">{service.duration}min</span></div>
					<div>${service.price}<span className="grey">  {service.description}</span></div>

				</div>
			)	
		})

		if(this.props.stage === 1){

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
	selectedService:state.schedulerReducer.selectedService,
	stage:state.schedulerReducer.stage

})

export default connect(mapStateToProps, { fetchServices, selectService, setStage })(Services);