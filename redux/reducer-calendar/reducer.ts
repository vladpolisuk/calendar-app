import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalendarState } from './types';

const initialState: CalendarState = {
	currentDay: '',
	currentMonth: '',
	currentYear: '',
	startDayOfWeek: 1,
	currentDaysOfCalendar: [],
	previousDaysOfCalendar: [],
	nextDaysOfCalendar: [],
};

const calendarSlice = createSlice({
	name: 'calendar',
	initialState,
	reducers: {
	},
});

export const calendarActions = calendarSlice.actions;
export const calendarReducer = calendarSlice.reducer;
