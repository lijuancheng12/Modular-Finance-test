const jsonData = require("./data.json");
const data = jsonData.data;
const low = data.map((day) => parseFloat(day.low));
const high = data.map((day) => parseFloat(day.high));

let lowest = 100000;
let lowestIndex = 100;
low.forEach((n, i) => {
  if (n < lowest) {
    lowest = n;
    lowestIndex = i;
  }
});

let highest = -100000;
let highIndex = 100;
high.forEach((n, i) => {
  if (n > highest) {
    highest = n;
    highIndex = i;
  }
});

let lowestDate = data[lowestIndex].quote_date;
let highestDate = data[highIndex].quote_date;

console.log(
  `buy on this day ${lowestDate} and sell on this day  ${highestDate}`
);

// let highest = -100000;
// let buyDay = {};
// let sellDay = {};
// data.forEach((day1) => {
//   data.forEach((day2) => {
//     if (day1.quote_date <= day2.quote_date) {
//       const price = parseFloat(day2.high) - parseFloat(day1.low);
//       if (price >= highest) {
//         highest = price;
//         buyDay = day1;
//         sellDay = day2;
//       }
//     }
//   });
// });

// console.log(
//   `buy on this day ${buyDay.quote_date} and sell on this day  ${sellDay.quote_date}`
// );
