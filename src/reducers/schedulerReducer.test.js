import { FETCH_TIMES, SELECT_TIME, FETCH_SERVICES, SELECT_SERVICE } from '../actions/types';
import schedulerReducer from './schedulerReducer';

describe('scheduler Reducers', () => {

	it('should return initial state', () => {
		expect(schedulerReducer(undefined, {})).toEqual(
			{
				services: [],
				selectedService:{},
				date: "",
				times:[],
				selectedTime: ""
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

		const service = {"name":"haircut", "description":"good ol haircut", "duration":"30", "price":"10"} 

		const initialState = {
			services: services,
			selectedService:{},	
			date:"",
			times:[],
			selectedTime:""
		}


		expect(
			schedulerReducer(initialState, {
				type:SELECT_SERVICE,
				service:service
			})
			).toEqual({
				services: services,
				"selectedService":
					{"name":"haircut", "description":"good ol haircut", "duration":"30", "price":"10"}, 
				date:"",
				times:[],
				selectedTime:""
			})
	})

	it('handle FETCH_TIMES after services were fetched and service was chosen ', () => {
		const services = 
			[
				{"name":"haircut", "description":"good ol haircut", "duration":"30", "price":"10"}, 
				{"name":"haircut + shave", "description":"cut and shave", "duration":"35", "price":"13"}
			]

		const service = {"name":"haircut", "description":"good ol haircut", "duration":"30", "price":"10"} 

		const initialState = {
			services: services,
			selectedService:service,	
			date:"",
			times:[],
			selectedTime:""
		}

		expect(
			schedulerReducer(initialState, {
				type:FETCH_TIMES,
				date:"3/4/2019",
				times:[1,2,3]
			})
			).toEqual(
				{
					services:services,
					selectedService:service,
					date:"3/4/2019",
					times:[1,2,3],
					selectedTime:""
				}
			)
		
	})

	it('handle SELECT_TIME after service fetched, chosen and times fetched', () => {
		const services = 
			[
				{"name":"haircut", "description":"good ol haircut", "duration":"30", "price":"10"}, 
				{"name":"haircut + shave", "description":"cut and shave", "duration":"35", "price":"13"}
			]

		const service = {"name":"haircut", "description":"good ol haircut", "duration":"30", "price":"10"} 

		const initialState = {
			services: services,
			selectedService:service,	
			date:"3/4/19",
			times:[1,2,3,4],
			selectedTime:""
		}

		expect(
			schedulerReducer(initialState, {
				type:SELECT_TIME,
				selectedTime:2
			})
		).toEqual(
			{
				services:services,
				selectedService:service,
				date:"3/4/19",
				times:[1,2,3,4],
				selectedTime:2
			}
		)

	})
})

