import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { fetchTimes, selectTime, submit } from '../actions/schedulerActions';
import Services from './Services'
import DateTime from './DateTime'
import SchedulerForm from './SchedulerForm'


class Scheduler extends Component{

	state = {
		date: new Date(),
	}

	componentDidMount = () => {
		// after mount, get times for current date 
		this.getTimes(this.state.date)
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


		let schedulerForm = ""
		if(this.props.stage === 3){
			schedulerForm = 
				<SchedulerForm
					inputs = {["Name", "Phone Number"]}
					onClick = {this.submit}
				/>
		}


		return(
			<div id="container">
				<Services/>
				<DateTime />
				{schedulerForm}
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


export default connect(mapStateToProps, { fetchTimes, selectTime, submit })(Scheduler);