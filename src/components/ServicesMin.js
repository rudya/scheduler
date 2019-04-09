import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectService ,setStage } from '../actions/schedulerActions';
import '../App.css';
const anime = require('animejs/lib/anime.js');

class ServicesMin extends Component{

	constructor(props){
		super(props)
		this.ref = React.createRef()
	}

	componentDidMount = () => {
		this.anim(this.props.clientY)
	}

	anim = (y) => {

		anime({
			targets:this.ref.current,
			duration:500,
			easing:'easeInOutCirc',
			translateY:y,
			direction:'reverse',
		})
		
	}

	unminify = () => {
		this.props.selectService({})
		this.props.setStage(1)
	}

	render(){
		return(
			<div id="services-min" className="service-container shadow " ref={this.ref} onClick={this.unminify}>
				<div><span className="blue med">{this.props.selectedService.name}</span></div>
				<div className="text-right"><span className="grey" >{this.props.selectedService.duration}min</span></div>
				<div>${this.props.selectedService.price}<span className="grey">  {this.props.selectedService.description}</span></div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	services:state.schedulerReducer.services,
	selectedService:state.schedulerReducer.selectedService

})

export default connect(mapStateToProps, { selectService ,setStage })(ServicesMin);

