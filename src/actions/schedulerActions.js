import { FETCH_TIMES, SELECT_TIME, FETCH_SERVICES, SELECT_SERVICE, SUBMIT_FORM, SET_STAGE } from './types';
import times from '../times.json'
import serviceObj from '../service.json'

export function fetchServices(userId){
	return function(dispatch){
		dispatch({
			type:FETCH_SERVICES,
			services:serviceObj.services
		})

	}
}

export function selectService(service){
	return function(dispatch){
		dispatch({
			type: SELECT_SERVICE,
			service:service
		})
	}
}

export function fetchTimes(date){
	return function(dispatch){
		dispatch({
			type: FETCH_TIMES,
			date: date,
			times: times.times
		})
	}
}

export function selectTime(time){
	return function(dispatch){
		dispatch({
			type: SELECT_TIME,
			selectedTime:time
		})
	}
}

export function submit(form){
	return function(dispatch){
		dispatch({
			type:SUBMIT_FORM,
			form: form
		})
	}
}

export function setStage(stage){
	return function(dispatch){
		dispatch({
			type:SET_STAGE,
			stage:stage
		})
	}
}
