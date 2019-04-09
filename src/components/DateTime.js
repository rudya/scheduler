import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import { fetchTimes, selectTime, setStage } from '../actions/schedulerActions';
import '../App.css';
import DateTimeMin from './DateTimeMin';
const anime = require('animejs/lib/anime.js');

class DateTime extends Component{

	constructor(props){
		super(props)
		this.ref = React.createRef()
	}

	state = {
		date: new Date(),
	}

	componentDidMount=()=>{
		console.log('mounted')
	}

 	getTimes = (date) => {
 		// set local state date // date format
 		this.setState({ date })

 		//formate date and fetch times
  		let formattedDate = date.toLocaleDateString("en-US")
		this.props.fetchTimes(formattedDate);
  	}

  	onActiveDateChange = (values) => {
  		this.getTimes(values.activeStartDate)
  	}

  	selectTime = (time) => {
  		this.props.selectTime(time)
  		this.props.setStage(3)
  	}

  	anim = () => {

		anime({
			targets:this.ref.current,
			duration:500,
			easing:'easeInOutCirc',
			opacity:[0,1],
			
		})
			
	}

	render(){

		const times = this.props.times.map(time => 
			<div className="time" key={time} onClick={() => {this.selectTime(time)}}>{time}</div>
		)

		let calendar = ""
		let timesContainer = ""
		if(this.props.stage === 2){
		
			calendar = 
					<Calendar
			          onChange={this.getTimes}
			          calendarType={"US"}
			          className={'calendar'}
			          showFixedNumberOfWeeks={false}
			          minDetail={'month'}
			          value={this.state.date}
			          onActiveDateChange = {this.onActiveDateChange}
			        />

			timesContainer = 
				<div id="times">
					{times}
				</div>

		}

		if(this.props.stage > 2){
			return(
				<DateTimeMin clientY="50"/>
				)
		}

		return(
			<div id="date-time">
			{calendar}
			{timesContainer}
			</div>
			)
	}
}

const mapStateToProps = state => ({
	times:state.schedulerReducer.times,
	date:state.schedulerReducer.date,
	selectedTime: state.schedulerReducer.selectedTime,
	selectedService: state.schedulerReducer.selectedService,
	stage: state.schedulerReducer.stage

})

export default connect(mapStateToProps, { fetchTimes, selectTime, setStage })(DateTime);
