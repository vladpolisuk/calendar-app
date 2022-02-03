export type CalendarState = {
	currentDay: string;
	currentMonth: string;
	currentYear: string;
	startDayOfWeek: number;
	currentDaysOfCalendar: DayOfCalendar[];
	previousDaysOfCalendar: DayOfCalendar[];
	nextDaysOfCalendar: DayOfCalendar[];
};

export type DayOfCalendar = {
	dayNumber: string;
	monthNumber: string;
	yearNumber: string;
	weekNumber: number;
	dayIndexOfWeek: number;
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
