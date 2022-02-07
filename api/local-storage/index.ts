import { Event } from '../../redux/reducer-calendar/types';
import { ResponseStatus } from './models';

export class LocalStorageAPI {
	constructor() {}

	private sendResponse(responseStatus: ResponseStatus) {
		return { status: responseStatus };
	}

	private getParsedEvents() {
		const events = localStorage.getItem('events') || '[]';
		const parsedExistEvents: Event[] = JSON.parse(events);
		return parsedExistEvents;
	}

	getEvents() {
		const parsedExistEvents = this.getParsedEvents();
		return parsedExistEvents;
	}

	createNewEvent(newEvent: Event) {
		const parsedExistEvents = this.getParsedEvents();
		parsedExistEvents.push(newEvent);
		const events = JSON.stringify(parsedExistEvents);
		localStorage.setItem('events', events);
		return this.sendResponse(ResponseStatus.SUCCESS);
	}
}
