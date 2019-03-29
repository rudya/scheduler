import { FETCH_TIMES, SELECT_TIME, FETCH_SERVICES, SELECT_SERVICE, SUBMIT_FORM, SET_STAGE } from '../actions/types';

const initialState = {
	services: [],
	selectedService:{},
	date: "",
	times:[],
	selectedTime: "",
	stage:1
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
		case SUBMIT_FORM:
			console.log(state, action.form)
			//fetch send POST
			return state
		case SET_STAGE:
			return {
				...state,
				stage:action.stage
			}
		default:
			return state;
	}
}