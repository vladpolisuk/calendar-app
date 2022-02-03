import { AppDispatch } from '../store';
import { calendarActions } from './reducer';
import { DayOfCalendar } from './types';
import moment from 'moment';

export const setStartDayOfWeek = (startDayOfWeek: number) => {
	return async (dispatch: AppDispatch) => {
		moment.updateLocale('en', { week: { dow: startDayOfWeek } });
		dispatch(calendarActions.settedStartDayOfWeek(startDayOfWeek));
		dispatch(setCurrentDaysOfCalendar());
		dispatch(calendarActions.settedWeekDays());
	};
};

export const setWeekDays = () => {
	return async (dispatch: AppDispatch) => {
		dispatch(calendarActions.settedWeekDays());
	};
};

export const setCurrentDay = () => {
	return async (dispatch: AppDispatch) => {
		const currentDay = moment().format('DD');
		dispatch(calendarActions.settedCurrentDay(currentDay));
	};
};

export const setCurrentMonth = () => {
	return async (dispatch: AppDispatch) => {
		const currentMonth = moment().format('MM');
		dispatch(calendarActions.settedCurrentMonth(currentMonth));
	};
};

export const setCurrentYear = () => {
	return async (dispatch: AppDispatch) => {
		const currentYear = moment().format('YYYY');
		dispatch(calendarActions.settedCurrentYear(currentYear));
	};
};

export const setCurrentDate = () => {
	return async (dispatch: AppDispatch) => {
		const currentDate = moment().format('DD-MM-YYYY');
		dispatch(calendarActions.settedCurrentDate(currentDate));
	};
};

export const setCurrentDaysOfCalendar = () => {
	return async (dispatch: AppDispatch) => {
		const startDayOfMonth = moment().startOf('month');
		const startDayOfCurrentCalendar = moment(startDayOfMonth).startOf('week');
		const currentDaysOfCalendar: DayOfCalendar[] = [];

		for (let i = 0; i < 35; i++) {
			const dayOfCalendarData = moment(startDayOfCurrentCalendar).add(i, 'day');

			const dayOfCalendar: DayOfCalendar = {
				dayNumber: dayOfCalendarData.format('DD'),
				monthNumber: dayOfCalendarData.format('MM'),
				yearNumber: dayOfCalendarData.format('YYYY'),
				weekNumber: dayOfCalendarData.week(),
				dayIndexOfWeek: dayOfCalendarData.weekday(),
				events: [],
				tasks: [],
				reminds: [],
			};

			currentDaysOfCalendar.push(dayOfCalendar);
		}

		dispatch(calendarActions.settedCurrentDaysOfCalendar(currentDaysOfCalendar));
	};
};
