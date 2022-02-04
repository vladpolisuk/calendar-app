export type CalendarState = {
	currentDate: string;
	showingDate: string;
	currentDaysOfCalendar: DayOfCalendar[];
	weekDays: string[];
};

export type DayOfCalendar = {
	date: string;
	events: Event[] | [];
	tasks: Task[] | [];
	reminds: Remind[] | [];
};

export type Task = {
	title: string;
	description: string;
};

export type Event = Task & {
	importance: 'High' | 'Medium' | 'Low';
	time: string;
};

export type Remind = Task & {
	time: string;
};
