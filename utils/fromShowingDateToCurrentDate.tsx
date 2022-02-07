import moment from "moment";

export const fromShowingDateToCurrentDate = (showingDate: string) => {
    if (showingDate === moment(showingDate).format('MM-DD-YYYY')) return showingDate;
    const showingMonth = showingDate.split('-')[0];
    const showingYear = showingDate.split('-')[1];
    return `${showingMonth}-${moment().format('DD')}-${showingYear}`;
}