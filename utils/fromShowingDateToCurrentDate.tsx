import moment from "moment";

export const fromShowingDateToCurrentDate = (showingDate: string) => {
    const showingMonth = showingDate.split('-')[0];
    const showingYear = showingDate.split('-')[1];
    return `${showingMonth}-${moment().format('DD')}-${showingYear}`;
}