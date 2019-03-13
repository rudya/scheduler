import React, { Component } from 'react';
import '../App.css';

class SchedulerForm extends Component{

	constructor(props){
		super(props)
		this.state = {}

	}

	handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

	render(){
		let inputs = this.props.inputs.map((input) => {
			return(
				<div key={input}>
					<p>{input}</p>
					<input type="input" name={input} onChange={this.handleChange}></input>
				</div>
			)
		})

		return(
			<div>
				{inputs}
				<button onClick={() => this.props.onClick(this.state)}> Submit </button>
			</div>
		)
	}
}

export default SchedulerForm;

