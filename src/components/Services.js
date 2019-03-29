import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchServices } from '../actions/schedulerActions';
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

	click = (clientY) => {

		this.setState({clientY:clientY})
	}


	render(){
		const services = this.props.services.map((service, i)=>{

			return (
				<Service service={service} key={i} duration = {500 + (i*50)} click={this.click}/>
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
	stage:state.schedulerReducer.stage

})

export default connect(mapStateToProps, { fetchServices })(Services);