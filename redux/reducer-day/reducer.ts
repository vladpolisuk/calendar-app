import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event } from '../reducer-calendar/types';
import { DayState } from './types';

const initialState: DayState = {
	date: '',
	events: [],
};

const daySlice = createSlice({
	name: 'day',
	initialState,
	reducers: {
		settedDate(state, action: PayloadAction<string>) {
			state.date = action.payload;
		},
		settedEvents(state, action: PayloadAction<Event[]>) {
			state.events = action.payload;
		},
	},
});

export const dayActions = daySlice.actions;
export const dayReducer = daySlice.reducer;
