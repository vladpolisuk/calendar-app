import { RootState } from '../store';

export const getCurrentDay = (state: RootState) => state.calendar.currentDay;
export const getCurrentMonth = (state: RootState) => state.calendar.currentMonth;
export const getCurrentYear = (state: RootState) => state.calendar.currentYear;
export const getCurrentDate = (state: RootState) => state.calendar.currentDate;
export const getCurrentDaysOfCalendar = (state: RootState) => state.calendar.currentDaysOfCalendar;
export const getPreviousDaysOfCalendar = (state: RootState) => state.calendar.previousDaysOfCalendar;
export const getNextDaysOfCalendar = (state: RootState) => state.calendar.nextDaysOfCalendar;
export const getWeekDays = (state: RootState) => state.calendar.weekDays;
