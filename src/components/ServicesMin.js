import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectService } from '../actions/schedulerActions';
import '../App.css';
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
			<div id="services-min" ref={this.ref}>
				{this.props.selectedService.name}
				<button onClick={() => {this.props.selectService({})}}>back</button>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	services:state.schedulerReducer.services,
	selectedService:state.schedulerReducer.selectedService

})

export default connect(mapStateToProps, { selectService })(ServicesMin);

