import React, { Component } from 'react';
import Calendar from 'react-calendar';
import '../App.css';

class App extends Component{

 	getTimes = (date) => {
		let formattedDate = formatDate(date)
		console.log(formattedDate)
	}

	render(){
		return(
			<div>
				<Calendar
		          onChange={this.getTimes}
		          calendarType={"US"}
		          className={'calendar'}
		          showFixedNumberOfWeeks={false}
		          minDetail={'month'}
		        />
			</div>
		)
	}
}


const formatDate = (date) => {
	var newDate = [date.getMonth()+1, date.getDate(), date.getFullYear()]
	newDate = newDate.join('/')
	return newDate
}

export default App;