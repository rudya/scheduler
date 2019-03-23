import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectService } from '../actions/schedulerActions';
import anime from 'animejs/lib/anime.es.js';
import '../App.css';

class ServicesMin extends Component{

	constructor(props){
		super(props)
		this.ref = React.createRef()
	}

	componentDidMount = () => {
		console.log(this.props.y)
		this.test(this.props.y)
	}

	test = (y) => {

		this.anim = {
			leave: anime({
				targets:this.ref.current,
				duration:300,
				easing:'linear',
				translateY:y,
				direction:'reverse',
				complete:()=>{
					console.log('done')

				}
			}),

		}
			
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

