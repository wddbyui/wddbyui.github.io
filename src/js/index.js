const date = new Date();

const month = date.getMonth() + 1;
const year = date.getFullYear();
const daysInMonth = new Date(year, month, 0).getDate();

console.log(daysInMonth);

let options = { month: 'long'};
const monthString = new Intl.DateTimeFormat('en-US', options).format(date);
console.log(monthString);