import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalendarState, DayOfCalendar } from './types';
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
		settedStartDayOfWeek(state, action: PayloadAction<number>) {
			state.startDayOfWeek = action.payload;
		},
		settedCurrentDay(state, action: PayloadAction<string>) {
			state.currentDay = action.payload;
		},
		settedCurrentMonth(state, action: PayloadAction<string>) {
			state.currentMonth = action.payload;
		},
		settedCurrentYear(state, action: PayloadAction<string>) {
			state.currentYear = action.payload;
		},
		settedCurrentDaysOfCalendar(state, action: PayloadAction<DayOfCalendar[]>) {
			state.currentDaysOfCalendar = action.payload;
		},
		settedPreviousDaysOfCalendar(state, action: PayloadAction<DayOfCalendar[]>) {
			state.previousDaysOfCalendar = action.payload;
		},
		settedNextDaysOfCalendar(state, action: PayloadAction<DayOfCalendar[]>) {
			state.nextDaysOfCalendar = action.payload;
		},
		settedWeekDays(state) {
			state.weekDays = moment.weekdaysShort(true);
		},
	},
});

export const calendarActions = calendarSlice.actions;
export const calendarReducer = calendarSlice.reducer;
