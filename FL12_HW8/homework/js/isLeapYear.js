(function isLeapYear(date) {
    let parsedDate = new Date(date);
    if (isNaN(parsedDate)) {
        return 'Invalid date';
    }
    let year = parsedDate.getFullYear();
    // year instanceof Date && !isNaN(year);
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return `${year} is a leap year`;
    } else {
        return `${year} is not a leap year`;
    }
})()