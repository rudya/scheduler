import { FETCH_TIMES, FETCH_SERVICES, SELECT_SERVICE } from '../actions/types';
import schedulerReducer from './schedulerReducer';

describe('scheduler Reducers', () => {

	it('should return initial state', () => {
		expect(schedulerReducer(undefined, {})).toEqual(
			{
				times:[],
				date: "",
				services: [],
				selectedService:{}
			}
		)
	})

	it('handle FETCH_SERVICES', () => {

		const services = 
			[
				{"name":"haircut", "description":"good ol haircut", "duration":"30", "price":"10"}, 
				{"name":"haircut + shave", "description":"cut and shave", "duration":"35", "price":"13"}
			]

		expect(
			schedulerReducer({}, {
				type:FETCH_SERVICES,
				services:services
			})
			).toEqual({
			"services":[
				{"name":"haircut", "description":"good ol haircut", "duration":"30", "price":"10"}, 
				{"name":"haircut + shave", "description":"cut and shave", "duration":"35", "price":"13"}
				]
			})
	})

	it('handle SELECT_SERVICE after services have been fetched', () => {

		const services = 
			[
				{"name":"haircut", "description":"good ol haircut", "duration":"30", "price":"10"}, 
				{"name":"haircut + shave", "description":"cut and shave", "duration":"35", "price":"13"}
			]

		const initialState = {
			times:[],
			date:"",
			services: services,
			selectedService:{}	
		}

		const service = {"name":"haircut", "description":"good ol haircut", "duration":"30", "price":"10"} 

		expect(
			schedulerReducer(initialState, {
				type:SELECT_SERVICE,
				service:service
			})
			).toEqual({
				times:[],
				date:"",
				services: services,
				"selectedService":
					{"name":"haircut", "description":"good ol haircut", "duration":"30", "price":"10"}, 
			})
	})

	it('handle FETCH_TIMES are services were fetched and service was chosen ', () => {
		const services = 
			[
				{"name":"haircut", "description":"good ol haircut", "duration":"30", "price":"10"}, 
				{"name":"haircut + shave", "description":"cut and shave", "duration":"35", "price":"13"}
			]

		const service = {"name":"haircut", "description":"good ol haircut", "duration":"30", "price":"10"} 

		const initialState = {
			times:[],
			date:"",
			services: services,
			selectedService:service	
		}

		expect(
			schedulerReducer(initialState, {
				type:FETCH_TIMES,
				date:"3/4/2019",
				times:[1,2,3]
			})
			).toEqual(
				{
					times:[1,2,3],
					date:"3/4/2019",
					services:services,
					selectedService:service
				}
			)
		

	})
})

