import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStage } from '../actions/schedulerActions';
import '../App.css';
import next from '../images/next.svg';
const anime = require('animejs/lib/anime.js');

class ServicesMin extends Component{

	constructor(props){
		super(props)
		this.ref = React.createRef()
	}

	componentDidMount = () => {
		console.log(this.props.clientY)
		this.anim(this.props.clientY)
	}

	anim = (y) => {

		const anim = anime({
				targets:this.ref.current,
				duration:500,
				easing:'linear',
				translateY:y,
				direction:'reverse',
				complete:()=>{
					console.log('done')

				}
			})
			
	}

	render(){
		return(
			<div id="services-min" className="service-name med" ref={this.ref} onClick={() => {this.props.setStage(1)}}>
				{this.props.selectedService.name}
				<img className="back-img" src={next} alt="back"></img>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	services:state.schedulerReducer.services,
	selectedService:state.schedulerReducer.selectedService

})

export default connect(mapStateToProps, { setStage })(ServicesMin);

