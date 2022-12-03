const fs = require("fs");
const PRIORITIES = require("./priorities.js");

const input = fs.readFileSync("../input.txt", "utf8");
const rucksacks = input.split("\n");

const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => s.has(x));
};

let sumOfPriorities = 0;

const SIZE_OF_GROUP = 3;
for (let i = 0; i < rucksacks.length; i += SIZE_OF_GROUP) {
  const group = rucksacks.slice(i, i + SIZE_OF_GROUP);

  const sharedItem = intersection(
    intersection(group[0].split(""), group[1].split("")),
    group[2].split("")
  )[0];
  sumOfPriorities += PRIORITIES[sharedItem];
}

console.log(sumOfPriorities);
