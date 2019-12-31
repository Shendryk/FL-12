function isLeapYear(dateInput) {
  let year = new Date(dateInput).getFullYear();
  if(!year) {
    return 'invalid Date';   
  } else if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
      return `${year} is a leap year`;
    } else {
        return `${year} is not a leap year`;
    }
}

isLeapYear(1213131313);