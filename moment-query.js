//Ref.:
//https://dzone.com/articles/using-momentjs-in-nodejs
//https://stackoverflow.com/questions/29798357/sequelize-where-statement-with-date
//https://momentjscom.readthedocs.io/en/latest/moment/05-query/05-is-same-or-after/
//https://www.sitepoint.com/managing-dates-times-using-moment-js/

/**
 * A Light-weight Alternative
For those of you looking for a lighter alternative, consider 'date-fns'. Date-fns is immutable, always returning a new date instead of changing the one you pass in. It has a simple API, is the perfect companion for Webpack and with its function-per-file style you can pick just what you need.
 */

const moment = require("moment");

const startDate2 = "2021-06-19";
const endDate = "2021-06-19";
const myMoment = moment().format("YYYY-MM-DD");

const compare2 = moment().subtract(1, "days").toDate();
//console.log(compare2);

const compare3 = moment().add(1, "days").toDate();
console.log(compare3);

//isSameOrBefore - Compare if myMoment is the same or BEFORE the event START date,
//It will return true where myMoment is SAME or BEFORE the specific date (included)

//console.log(myMoment); // 2021-06-19
const compare = moment(myMoment).isSameOrBefore(startDate2, "YYYY-MM-DD");
//console.log(compare); //true

//isAfter - Compare if myMoment is the same or AFTER the event END date (not included),
//It will return true where myMoment is AFTER the specific date (not included)
const compareEndDate = moment(myMoment).isAfter(endDate, "YYYY-MM-DD");
//console.log(compareEndDate);

//To format the date
const transform = moment(startDate2, "YYYY-MM-DD").format("ll");
//console.log(transform); // Jun 19, 2021

//More tests bellow
const myDate = moment().format();
// console.log(myDate); //2021-06-19T08:27:05+02:00

const hoje = moment().startOf("day").fromNow();
// console.log(hoje); // 8 hours ago

const monthDayYear = moment().format("l");
// console.log(monthDayYear); // 06/19/2021

const monDayYear = moment().format("ll");
// console.log(monDayYear); // Jun 19, 2021

const today = moment().format("DD-MM-YYYY");
// console.log(today); // 19-06-2021

//Time from now
const startDate = "2021-05-19";

const fromNow = moment(startDate, "YYYY-MM-DD").fromNow();
//console.log(fromNow); // in 15 hours

//Subtract
const subtract = moment(startDate, "YYYY-MM-DD").subtract(2, "days");
//console.log(subtract); // Moment<2021-06-19T00:00:00+02:00>
