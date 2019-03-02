import { FETCH_TIMES, FETCH_SERVICES, SELECT_SERVICE } from './types';
import times from '../times.json'
import serviceObj from '../service.json'

export function fetchServices(userId){
	return function(dispatch){
		console.log('fetchServices');
		dispatch({
			type:FETCH_SERVICES,
			services:serviceObj.services
		})

	}
}

export function selectService(service){
	return function(dispatch){
		console.log('selectService');
		dispatch({
			type: SELECT_SERVICE,
			service:service
		})
	}
}

export function fetchTimes(date){
	return function(dispatch){
		console.log('fetchTimes');
		dispatch({
			type: FETCH_TIMES,
			date: date,
			times: times.times
		})
	}
}
