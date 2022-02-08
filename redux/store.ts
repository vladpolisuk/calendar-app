import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { calendarReducer } from './reducer-calendar/reducer';
import { dayReducer } from './reducer-day/reducer';

const rootReducer = combineReducers({
	calendar: calendarReducer,
	day: dayReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
