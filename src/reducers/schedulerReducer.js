import { FETCH_TIMES, FETCH_SERVICES, SELECT_SERVICE } from '../actions/types';

const initialState = {
	times:[],
	date: "",
	services: [],
	selectedService:{}
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
		default:
			return state;
	}
}