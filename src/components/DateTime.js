import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import { fetchTimes, selectTime, submit } from '../actions/schedulerActions';
import '../App.css';

class DateTime extends Component{


	render(){

		const times = this.props.times.map(time => 
			
			<li key={time} onClick={()=>{this.props.selectTime(time)}}>{time}</li>
			
		)

		let calendar = ""
		let timesContainer = ""
		if(!isEmpty(this.props.selectedService)){
		
			calendar = 
					<Calendar
			          onChange={this.getTimes}
			          calendarType={"US"}
			          className={'calendar'}
			          showFixedNumberOfWeeks={false}
			          minDetail={'month'}
			        />

			timesContainer = 
				<div>
					{times}
				</div>

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
	date:state.schedulerReducer.date,
	selectedTime: state.schedulerReducer.selectedTime,
	selectedService: state.schedulerReducer.selectedService,

})

const isEmpty = obj => {
	if(Object.keys(obj).length === 0){
		return true
	}
	return false
}

export default connect(mapStateToProps, { fetchTimes, selectTime, submit })(DateTime);
