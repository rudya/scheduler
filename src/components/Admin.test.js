import { getWeekDates } from './Admin'

describe ('Admin Test', () => {
	it('get weekDates test 1', () => {
		let date = new Date("Mon Mar 25 2019 00:00:00 GMT-0700 (Pacific Daylight Time)")
		let result = ["3/24/2019", "3/25/2019", "3/26/2019", "3/27/2019", "3/28/2019", "3/29/2019", "3/30/2019"]
		expect(getWeekDates(date)).toEqual(result)
	}),
	it('get weekDates test 2', () => {
		let date = new Date("Tues Mar 26 2019 00:00:00 GMT-0700 (Pacific Daylight Time)")
		let result = ["3/24/2019", "3/25/2019", "3/26/2019", "3/27/2019", "3/28/2019", "3/29/2019", "3/30/2019"]
		expect(getWeekDates(date)).toEqual(result)
	})
})