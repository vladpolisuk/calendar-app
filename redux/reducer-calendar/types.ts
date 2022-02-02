export type CalendarState = {
	currentDay: string;
	currentMonth: string;
	currentYear: string;
	daysOfCurrentCalendar: DayOfCalendar[];
	previousDaysOfCurrentCalendar: DayOfCalendar[];
	nextDaysOfCalendar: DayOfCalendar[];
};

export type DayOfCalendar = {
	dayNumber: string;
	monthNumber: string;
	yearNumber: string;
	weekNumber: string;
	dayOfWeek: string;
};
