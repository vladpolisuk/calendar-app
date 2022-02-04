import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalendarState, DayOfCalendar } from './types';
import moment from 'moment';

const initialState: CalendarState = {
	currentDate: '',
	showingDate: '',
	currentDaysOfCalendar: [],
	weekDays: [],
};

const calendarSlice = createSlice({
	name: 'calendar',
	initialState,
	reducers: {
		settedCurrentDate(state, action: PayloadAction<string>) {
			state.currentDate = action.payload;
		},
		settedShowingDate(state, action: PayloadAction<string>) {
			state.showingDate = action.payload;
		},
		settedCurrentDaysOfCalendar(state, action: PayloadAction<DayOfCalendar[]>) {
			state.currentDaysOfCalendar = action.payload;
		},
		settedWeekDays(state) {
			state.weekDays = moment.weekdaysShort(true);
		},
	},
});

export const calendarActions = calendarSlice.actions;
export const calendarReducer = calendarSlice.reducer;
