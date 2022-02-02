import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import { calendarReducer } from './reducer-calendar/reducer';

const rootReducer = combineReducers({
	calendar: calendarReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
