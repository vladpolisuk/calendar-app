import { LocalStorageAPI } from '../../api/local-storage';
import { AppDispatch } from '../store';
import { dayActions } from './reducer';

export const setDayDate = (date: string) => {
	return dayActions.settedDate(date)
};

export const setDayEvents = (date: string) => {
	return async (dispatch: AppDispatch) => {
		const localStorageApi = new LocalStorageAPI();
		const eventsByDate = localStorageApi.getEventsByDate(date);
		dispatch(dayActions.settedEvents(eventsByDate));
	};
};
