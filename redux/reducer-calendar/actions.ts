import moment from 'moment';
import { LocalStorageAPI } from '../../api/local-storage';
import { ResponseStatus } from '../../api/local-storage/models';
import { fromShowingDateToCurrentDate } from '../../utils/fromShowingDateToCurrentDate';
import { AppDispatch } from '../store';
import { calendarActions } from './reducer';
import { DayOfCalendar, Event } from './types';

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
		const localStorageApi = new LocalStorageAPI();
		const events = localStorageApi.getEvents();

		const currentDaysOfCalendar: DayOfCalendar[] = [];

		for (let i = 0; i < 35; i++) {
			const eventDate = moment(startDayOfCurrentCalendar).add(i, 'day').format('MM-DD-YYYY');

			const eventsEvents = events.filter((event) => {
				return event.eventDate === eventDate && event.eventType === 'event';
			});

			const eventsTasks = events.filter((event) => {
				return event.eventDate === eventDate && event.eventType === 'task';
			});

			const eventsReminders = events.filter((event) => {
				return event.eventDate === eventDate && event.eventType === 'reminder';
			});

			currentDaysOfCalendar.push({
				date: eventDate,
				events: eventsEvents,
				tasks: eventsTasks,
				reminders: eventsReminders,
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

export const createNewEvent = (newEvent: Event) => {
	return async (dispatch: AppDispatch) => {
		const localStorageApi = new LocalStorageAPI();
		const { status } = localStorageApi.createNewEvent(newEvent);
		if (status === ResponseStatus.SUCCESS) dispatch(setCurrentDaysOfCalendar(newEvent.eventDate));
	};
};
