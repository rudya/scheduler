import React, { Component } from 'react';
import '../App.css';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import { fetchTimes, selectTime, submit } from '../actions/schedulerActions';
import Services from './Services'
import SchedulerForm from './SchedulerForm'


class Scheduler extends Component{

	state = {
		date: new Date(),
	}

 	getTimes = (date) => {
 		// set local state date // date format
 		this.setState({ date })

 		//formate date and fetch times
  		let formattedDate = date.toLocaleDateString("en-US")
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
		          value={this.state.date}
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


export default connect(mapStateToProps, { fetchTimes, selectTime, submit })(Scheduler);