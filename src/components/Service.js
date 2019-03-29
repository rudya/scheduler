import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchServices, selectService, setStage } from '../actions/schedulerActions';
import '../App.css';
const anime = require('animejs/lib/anime.js');

class Service extends Component{
	constructor(props){
		super(props);
		this.ref = React.createRef()

	}

	componentDidMount = () => {
		this.anim().play()

	}

	selectService = (e, service) => {

		this.props.selectService(service)
		this.props.setStage(2)
		this.props.click(e.clientY)
	}


	anim = () => {
		return (  anime({
				targets:this.ref.current,
				duration:this.props.duration,
				easing:'easeInOutCirc',
				translateY:[200,0],
				opacity:[0,1],
				autoplay:'false',

			}))
		

			
	}

	render(){
		return(
			<div className="service-container shadow" key={this.props.i} onClick={(e) => this.selectService(e, this.props.service)} ref={this.ref}>
				<div><span className="blue med">{this.props.service.name}</span></div>
				<div className="text-right"><span className="grey" >{this.props.service.duration}min</span></div>
				<div>${this.props.service.price}<span className="grey">  {this.props.service.description}</span></div>

			</div>
		)
	}
}

const mapStateToProps = state => ({
	services:state.schedulerReducer.services,
	selectedService:state.schedulerReducer.selectedService,
	stage:state.schedulerReducer.stage

})

export default connect(mapStateToProps, { fetchServices, selectService, setStage })(Service);
