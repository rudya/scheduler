import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchServices, selectService, setStage } from '../actions/schedulerActions';
import '../App.css';
import ServicesMin from './ServicesMin';
import Service from './Service';


class Services extends Component{

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


	render(){
		const services = this.props.services.map((service, i)=>{

			return (
				<Service service={service} key={i} duration = {500 + (i*50)}/>
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