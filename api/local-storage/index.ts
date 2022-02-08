import { ChangedEventData, Event } from '../../redux/reducer-calendar/types';
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

	getEventsByDate(date: string) {
		const parsedExistEvents = this.getParsedEvents();
		const eventsByDate = parsedExistEvents.filter((event) => event.eventDate === date);
		return eventsByDate;
	}

	createNewEvent(newEvent: Event) {
		const parsedExistEvents = this.getParsedEvents();
		parsedExistEvents.push(newEvent);
		const events = JSON.stringify(parsedExistEvents);
		localStorage.setItem('events', events);
		return this.sendResponse(ResponseStatus.SUCCESS);
	}

	getEventById(searchableEventId: string) {
		const parsedExistEvents = this.getParsedEvents();
		let event;
		for (let i = 0; i < parsedExistEvents.length; i++) {
			const condition = parsedExistEvents[i].eventId === searchableEventId;
			if (!condition) continue;
			event = parsedExistEvents[i];
			break;
		}
		return event as Event;
	}

	editEventById(eventId: string, changedEventData: ChangedEventData) {
		const parsedExistEvents = this.getParsedEvents();
		const changedEventsArray = parsedExistEvents.map((event) => {
			return event.eventId === eventId ? { ...event, ...changedEventData } : event;
		});
		const events = JSON.stringify(changedEventsArray);
		localStorage.setItem('events', events);
		return this.sendResponse(ResponseStatus.SUCCESS);
	}

	deleteEventById(removingEventId: string) {
		const parsedExistEvents = this.getParsedEvents();
		const filteredEvents = parsedExistEvents.filter(({ eventId }) => eventId !== removingEventId);
		const events = JSON.stringify(filteredEvents);
		localStorage.setItem('events', events);
		return this.sendResponse(ResponseStatus.SUCCESS);
	}
}
