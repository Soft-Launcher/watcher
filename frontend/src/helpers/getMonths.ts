function calculateMonthsElapsed(creationDateStr: string): string {
    // Convert the creation date from string to a Date object
    const creationDate: Date = new Date(creationDateStr);

    // Get the current date
    const currentDate: Date = new Date();

    // Calculate the difference in milliseconds between the two dates
    const timeDifferenceMs: number =
        currentDate.getTime() - creationDate.getTime();

    // Convert the difference from milliseconds to months
    const monthsElapsed: number = Math.round(
        timeDifferenceMs / (1000 * 60 * 60 * 24 * 30.44),
    ); // Approximately 30.44 days per month

    return `${monthsElapsed} meses de actividad`;
}

export default calculateMonthsElapsed;