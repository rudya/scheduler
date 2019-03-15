import React, { Component } from 'react';
import '../App.css';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import { fetchTimes, selectTime, submit } from '../actions/schedulerActions';
import Services from './Services'
import SchedulerForm from './SchedulerForm'


class Scheduler extends Component{

 	getTimes = (date) => {
  		let formattedDate = formatDate(date)
		this.props.fetchTimes(formattedDate);
  	}

  	submit = (formState) => {
  		console.log('submit:',formState)
  		this.props.submit(formState);
  	}


	render(){

		const times = this.props.times.map(time => 
			
			<li key={time} onClick={()=>{this.props.selectTime(time)}}>{time}</li>
			
		)

		return(
			<div>
				<Services/>
				<Calendar
		          onChange={this.getTimes}
		          calendarType={"US"}
		          className={'calendar'}
		          showFixedNumberOfWeeks={false}
		          minDetail={'month'}
		        />
				<div>
					{times}
				</div>
				<SchedulerForm
					inputs = {["Name", "Phone Number"]}
					onClick = {this.submit}
				/>
			</div>

		)
	}

}

const mapStateToProps = state => ({
	times:state.schedulerReducer.times,
	date:state.schedulerReducer.date,
	selectedTime: state.schedulerReducer.selectedTime

})

const formatDate = (date) => {
	var newDate = [date.getMonth()+1, date.getDate(), date.getFullYear()]
	newDate = newDate.join('/')
	return newDate
}

export default connect(mapStateToProps, { fetchTimes, selectTime, submit })(Scheduler);