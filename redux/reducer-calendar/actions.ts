import moment from 'moment';
import { fromShowingDateToCurrentDate } from '../../utils/fromShowingDateToCurrentDate';
import { AppDispatch } from '../store';
import { calendarActions } from './reducer';
import { DayOfCalendar } from './types';

export const setCurrentDate = () => {
	return async (dispatch: AppDispatch) => {
		const currentDate = moment().format('MM-DD-YYYY');
		dispatch(calendarActions.settedCurrentDate(currentDate));
	};
};

export const setShowingDate = (showingDate: string) => {
	return async (dispatch: AppDispatch) => {
		dispatch(calendarActions.settedShowingDate(showingDate));
	};
};

export const setCurrentDaysOfCalendar = (showingDate: string) => {
	return async (dispatch: AppDispatch) => {
		const formattedShowingDate = fromShowingDateToCurrentDate(showingDate);
		const startDayOfMonth = moment(formattedShowingDate).startOf('month');
		const startDayOfCurrentCalendar = moment(startDayOfMonth).startOf('week');

		const currentDaysOfCalendar: DayOfCalendar[] = [];

		for (let i = 0; i < 35; i++) {
			currentDaysOfCalendar.push({
				date: moment(startDayOfCurrentCalendar).add(i, 'day').format('MM-DD-YYYY'),
				events: [],
				tasks: [],
				reminds: [],
			});
		}

		dispatch(calendarActions.settedCurrentDaysOfCalendar(currentDaysOfCalendar));
	};
};

export const setWeekDays = (startDayOfWeek = 0) => {
	return async (dispatch: AppDispatch) => {
		moment.updateLocale('en', { week: { dow: startDayOfWeek } });
		dispatch(calendarActions.settedWeekDays());
	};
};
