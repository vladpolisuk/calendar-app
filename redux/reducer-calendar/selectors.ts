import { RootState } from '../store';

export const getCurrentDate = (state: RootState) => state.calendar.currentDate;
export const getShowingDate = (state: RootState) => state.calendar.showingDate;
export const getCurrentDaysOfCalendar = (state: RootState) => state.calendar.currentDaysOfCalendar;
export const getWeekDays = (state: RootState) => state.calendar.weekDays;
