import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTime, setStage } from '../actions/schedulerActions';
import '../App.css';
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
			<div id="date-time-min" ref={this.ref}>
				{this.props.date} @ {this.props.selectedTime}
				<button onClick={() => {this.props.setStage(2)}}>back</button>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	date:state.schedulerReducer.date,
	selectedTime:state.schedulerReducer.selectedTime

})

export default connect(mapStateToProps, { selectTime, setStage })(DateTimeMin);

