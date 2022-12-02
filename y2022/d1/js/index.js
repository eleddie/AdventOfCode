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
