import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState: CalendarState = {
	currentDay: '',
	currentMonth: '',
	currentYear: '',
	startDayOfWeek: 0,
	currentDaysOfCalendar: [],
	previousDaysOfCalendar: [],
	nextDaysOfCalendar: [],
	weekDays: moment.weekdaysShort(),
};

const calendarSlice = createSlice({
	name: 'calendar',
	initialState,
	reducers: {
	},
});

export const calendarActions = calendarSlice.actions;
export const calendarReducer = calendarSlice.reducer;
