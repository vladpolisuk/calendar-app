export const fromCurrentDateToShowingDate = (currentDate: string) => {
    const currentMonth = currentDate.split('-')[0];
    const currentYear = currentDate.split('-')[2];
    return `${currentMonth}-${currentYear}`
}