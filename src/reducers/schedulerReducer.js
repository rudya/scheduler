import { FETCH_TIMES } from '../actions/types';

const initialState = {
	times:[],
	date: ""
}

export default function(state= initialState, action){
	switch(action.type){
		case FETCH_TIMES:
			console.log('schedulerReducer', action.times)
			return {
				...state,
				times: action.times,
				date: action.date
			}
		default:
			return state;
	}
}