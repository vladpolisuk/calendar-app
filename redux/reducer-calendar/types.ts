export type CalendarState = {
	currentDate: string;
	showingDate: string;
	currentDaysOfCalendar: DayOfCalendar[];
	weekDays: string[];
};

export type DayOfCalendar = {
	date: string;
	events: Event[];
	tasks: Event[];
	reminders: Event[];
};

export type Event = {
	eventId: string;
	eventDate: string;
	eventTitle: string;
	eventDescription: string;
	eventType: 'event' | 'task' | 'reminder';
	eventColor: string;
};

export type ChangedEventData = Omit<Event, 'eventId' | 'eventType' | 'eventDate'>;
