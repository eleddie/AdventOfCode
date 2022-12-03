const fs = require("fs");
const input = fs.readFileSync("../input.txt", "utf8");

const data = input.split(`\n`);

const elvesFood = [];
let elfIndex = 0;
data.forEach((foodItem) => {
  if (foodItem === "") {
    elfIndex++;
    return;
  }
  elvesFood[elfIndex] = (elvesFood[elfIndex] || 0) + +foodItem;
});

const max = Math.max(...elvesFood);

console.log(max);

// Part 2: get sum of top 3

const sorted = elvesFood.sort((a, b) => b - a);
const top3 = sorted.slice(0, 3);
const sum = top3.reduce((a, b) => a + b, 0);
console.log(sum);
