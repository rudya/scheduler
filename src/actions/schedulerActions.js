import { FETCH_TIMES } from './types';
import test from '../test.json'

export function fetchTimes(date){
	return function(dispatch){
		console.log('fetchTimes');
		dispatch({
			type: FETCH_TIMES,
			date: date,
			times: test.times
		})
	}
}