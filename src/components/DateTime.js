import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import { fetchTimes, selectTime, setStage } from '../actions/schedulerActions';
import '../App.css';
import DateTimeMin from './DateTimeMin';

class DateTime extends Component{

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

  	onActiveDateChange = () => {
  		console.log('month change')
  		//set date to null
  		//get rid of times
  	}

  	selectTime = (time) => {
  		this.props.selectTime(time)
  		this.props.setStage(3)
  	}

	render(){

		const times = this.props.times.map(time => 
			
			<li key={time} onClick={() => {this.selectTime(time)}}>{time}</li>
			
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
				<div>
					{times}
				</div>

		}

		if(this.props.stage > 2){
			return(
				<DateTimeMin clientY="50"/>
				)
		}

		return(
			<div>
			{calendar}
			{timesContainer}
			</div>
			)
	}
}

const mapStateToProps = state => ({
	times:state.schedulerReducer.times,
	//date:state.schedulerReducer.date,
	selectedTime: state.schedulerReducer.selectedTime,
	selectedService: state.schedulerReducer.selectedService,
	stage: state.schedulerReducer.stage

})

export default connect(mapStateToProps, { fetchTimes, selectTime, setStage })(DateTime);
