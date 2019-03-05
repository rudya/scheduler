import { FETCH_TIMES, SELECT_TIME, FETCH_SERVICES, SELECT_SERVICE } from '../actions/types';

const initialState = {
	services: [],
	selectedService:{},
	date: "",
	times:[],
	selectedTime: ""
}

export default function(state= initialState, action){
	switch(action.type){
		case FETCH_SERVICES:
			return {
				...state,
				services:action.services
			}
		case SELECT_SERVICE:
			return {
				...state,
				selectedService:action.service
			}
		case FETCH_TIMES:
			return {
				...state,
				times: action.times,
				date: action.date
			}
		case SELECT_TIME:
			return {
				...state,
				selectedTime:action.selectedTime
			}
		default:
			return state;
	}
}