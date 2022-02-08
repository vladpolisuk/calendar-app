import { RootState } from '../store';

export const getDayDate = (state: RootState) => state.day.date;
export const getDayEvents = (state: RootState) => state.day.events;
