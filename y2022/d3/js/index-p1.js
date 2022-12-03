const fs = require("fs");
const PRIORITIES = require("./priorities.js");

const input = fs.readFileSync("../input.txt", "utf8");
const rucksacks = input.split("\n");

const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => s.has(x));
};

let sumOfPriorities = 0;

rucksacks.forEach((rucksack) => {
  const compartment1 = rucksack.substring(0, rucksack.length / 2).split("");
  const compartment2 = rucksack.substring(rucksack.length / 2).split("");
  const sharedItem = intersection(compartment1, compartment2)[0];
  sumOfPriorities += PRIORITIES[sharedItem];
});

console.log(sumOfPriorities);
