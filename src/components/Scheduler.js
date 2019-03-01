import React, { Component } from 'react';
import '../App.css';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import { fetchTimes } from '../actions/schedulerActions';

class Scheduler extends Component{


  getTimes = (date) => {
  	let formattedDate = this.formatDate(date)
		this.props.fetchTimes(formattedDate);
  }

	formatDate = (date) => {
		var newDate = [date.getMonth()+1, date.getDate(), date.getFullYear()]
		newDate = newDate.join('/')
		return newDate
	}

	render(){

		const times = this.props.times.map(time => 
			
				<li key={time}>{time}</li>
			
		)

		return(
			<div>
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
			</div>

		)
	}

}

const mapStateToProps = state => ({
	times:state.schedulerReducer.times,
	date:state.schedulerReducer.date

})

export default connect(mapStateToProps, { fetchTimes })(Scheduler);