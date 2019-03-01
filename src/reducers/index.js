import { combineReducers } from 'redux';
import schedulerReducer from './schedulerReducer';

export default combineReducers({
	schedulerReducer:schedulerReducer
})