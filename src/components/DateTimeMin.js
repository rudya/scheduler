import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTime, setStage } from '../actions/schedulerActions';
import '../App.css';
import next from '../images/next.svg';
const anime = require('animejs/lib/anime.js');

class DateTimeMin extends Component{

	constructor(props){
		super(props)
		this.ref = React.createRef()
	}

	componentDidMount = () => {
		//console.log(this.props.clientY)
		this.anim(this.props.clientY)
	}

	anim = (y) => {

		anime({
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

	unminify = () => {
		this.props.selectTime("")
		this.props.setStage(2)
	}

	render(){
		return(
			<div id="date-time-min" className="blue med min" ref={this.ref} onClick={this.unminify}>
				{this.props.date} @ {this.props.selectedTime}
				<img className="back-img" src={next} alt="back"></img>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	date:state.schedulerReducer.date,
	selectedTime:state.schedulerReducer.selectedTime

})

export default connect(mapStateToProps, { selectTime, setStage })(DateTimeMin);

