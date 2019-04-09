import React, { Component } from 'react';
import '../App.css';

class SchedulerForm extends Component{

	constructor(props){
		super(props)

		const initialState = {}
		this.props.inputs.map((input) => {
			initialState[input]=""
			return initialState
		})
		
		this.state = initialState

	}

	handleChange = (event) => {
    	this.setState({[event.target.name]: event.target.value})
	}

	handleSubmit = () => {
		let isFilled = true

		Object.keys(this.state).forEach((input) => {
				
			if(this.state[input] === ""){
				isFilled = false
			}
		})

		if(isFilled){
			this.props.onClick(this.state)
		}
		else{
			console.log("fill out all fields")
		}
	}

	render(){
		let inputs = this.props.inputs.map((input) => {
			return(
				<div className="input" key={input}>
					<input type="input" className="med blue" name={input} onChange={this.handleChange} placeholder={input}></input>
				</div>
			)
		})

		return(
			<div id="scheduler-form">
				{inputs}
				<button className = "med" onClick={this.handleSubmit}> Submit </button>
			</div>
		)
	}
}

export default SchedulerForm;

