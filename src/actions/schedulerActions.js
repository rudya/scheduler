import { FETCH_TIMES, SELECT_TIME, FETCH_SERVICES, SELECT_SERVICE, SUBMIT_FORM } from './types';
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
