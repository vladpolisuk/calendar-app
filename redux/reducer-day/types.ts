import { DayOfCalendar } from '../reducer-calendar/types';

export type DayState = Omit<DayOfCalendar, 'tasks' | 'reminders'>;
