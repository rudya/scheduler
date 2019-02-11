import React, { Component } from 'react';
import './App.css';
import Calendar from 'react-calendar'

class Scheduler extends Component{
	state = {
    date: new Date(),
  }


	constructor(props){
		super(props);
	}

  onChange = (date) => {
  	this.setState({ date })
  	this.getTimes(date)
  }

	getTimes = (date) => {
		var newDate = [date.getMonth()+1, date.getDate(), date.getFullYear()]
		newDate = newDate.join('/')
		console.log(newDate)
		//pass date to getTimes request, pass to times component
	}

	render(){
		return(
			<div>
				<Calendar
          onChange={this.onChange}
          value={this.state.date}
          calendarType={"US"}
          className={'calendar'}
          showFixedNumberOfWeeks={false}
          minDetail={'month'}
        />
			</div>

		)
	}

}

export default Scheduler;