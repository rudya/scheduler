import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchServices, selectService } from '../actions/schedulerActions';
import '../App.css';

class Services extends Component{

	componentDidMount = () => {
		this.props.fetchServices(1)
	}

	onclick = (service) => {
		this.props.selectService(service)
	}

	render(){
		const services = this.props.services.map((service)=>{
			return (
				<div key={service.name} onClick={()=>this.onclick({service})}>
					<div>{service.name}</div>
					<div>{service.description}</div>
					<div>{service.duration}min</div>
					<div>${service.price}</div>

				</div>
			)	
		})
		return(
			<div> 
				{services} 
			</div>

		)
	}
}

const mapStateToProps = state => ({
	services:state.schedulerReducer.services,
	selectedService:state.schedulerReducer.selectedService

})

export default connect(mapStateToProps, { fetchServices, selectService })(Services);