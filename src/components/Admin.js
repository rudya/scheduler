import React, { Component } from 'react';
import Calendar from 'react-calendar';
import '../App.css';

class App extends Component{

	state = {
		date: new Date(),
	}

 	getTimes = (date) => {
 		// set local state date // date format
 		this.setState({ date })

		//let formattedDate = formatDate(date)
		getWeekDates(date)

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
		          value={this.state.date}
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

const getWeekDates = (dateTime) => {

	let weekDates = []
	let date = dateTime.getDate()
	let day = dateTime.getDay()

	//array index controls slice index for previous days of the week
	let arrayIndex = 0

	for (let i = 0 ; i < 7 ; i++){

		let d = new Date(dateTime.getTime())
		let dateDiff = ((day+i)%7)-day
		d.setDate(dateTime.getDate() + dateDiff)

		if(dateDiff  >= 0 ){

			weekDates.push(d.toLocaleDateString("en-US"))
		}
		else{

			weekDates.splice(arrayIndex, 0 , d.toLocaleDateString("en-US"))
			arrayIndex += 1
		}
	}

	console.log(weekDates)

	return weekDates

}

export default App;