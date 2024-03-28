import moment from 'moment';
import { LocalStorageAPI } from '../../api/local-storage';
import { ResponseStatus } from '../../api/local-storage/models';
import { fromShowingDateToCurrentDate } from '../../utils/fromShowingDateToCurrentDate';
import { calendarActions } from './reducer';
import { ChangedEventData, DayOfCalendar, Event } from './types';

export const setCurrentDate = () => {
	const currentDate = moment().format('MM-DD-YYYY');
	return calendarActions.settedCurrentDate(currentDate)
};

export const setShowingDate = (showingDate: string) => {
	return calendarActions.settedShowingDate(showingDate)
};

export const setCurrentDaysOfCalendar = (showingDate: string) => {
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

	return calendarActions.settedCurrentDaysOfCalendar(currentDaysOfCalendar);
};

export const setWeekDays = (startDayOfWeek = 0) => {
	moment.updateLocale('en', { week: { dow: startDayOfWeek } });
	return calendarActions.settedWeekDays();
};

export const createNewEvent = (newEvent: Event) => {
	const localStorageApi = new LocalStorageAPI();
	const { status } = localStorageApi.createNewEvent(newEvent);

	if (status === ResponseStatus.SUCCESS) {
		return setCurrentDaysOfCalendar(newEvent.eventDate);
	}
};

export const editEventById = (eventId: string, changedData: ChangedEventData) => {
	const localStorageApi = new LocalStorageAPI();
	const { status } = localStorageApi.editEventById(eventId, changedData);

	if (status === ResponseStatus.SUCCESS) {
		const { eventDate } = localStorageApi.getEventById(eventId);
		return setCurrentDaysOfCalendar(eventDate);
	}
};

export const deleteEventById = (eventId: string) => {
	const localStorageApi = new LocalStorageAPI();
	const { eventDate } = localStorageApi.getEventById(eventId);
	const { status } = localStorageApi.deleteEventById(eventId);

	if (status === ResponseStatus.SUCCESS) {
		return setCurrentDaysOfCalendar(eventDate);
	}
};
