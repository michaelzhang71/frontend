/* Date
 * GMT vs. UTC
 * new Date()
 * Date.now()
 *  */

// timestamp methods
let timestamp = Date.now();
let date = new Date();
let stamp = date.getTime();

// Date.parse()

const stamp1 = Date.parse("2022-01-30");
console.log("stamp1", stamp1);

console.log("+date: ", +date);
console.log("valueOf(): ", date.valueOf());
console.log("timestamp", timestamp);
console.log("date", date);
console.log("stamp", stamp);

let localDate = date.toDateString();
let isoDate = date.toISOString();

console.log("localDate", localDate);
console.log("isoDate", isoDate);

// create date object with timestamp

let publishDate = new Date(1576018952655);
console.log("publishDate", publishDate);

// timeFormat

function formatTime(timestamp) {
  let date = new Date(timestamp);

  // year
  let year = date.getFullYear();

  // month
  let month = date.getMonth() + 1;

  // date
  let day = date.getDate();

  // weekday
  let weekday = date.getDay();

  return `${year}-${month}-${day}-${weekday}`;
}

const graduationDate = formatTime(1676018952655);
console.log("graduationDate", graduationDate);
