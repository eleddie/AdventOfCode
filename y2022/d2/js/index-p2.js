const fs = require("fs");
const input = fs.readFileSync("../input.txt", "utf8");
const {
  SHAPE_POINTS,
  OUTCOME_POINTS,
  SHAPE_MAP,
  OUTCOME_MAP,
  REVERSE_SHAPE_MAP,
} = require("./constants-p2.js");

const mapPossibleOutcomesWithPoints = () => {
  const opponentShapes = ["A", "B", "C"];
  const possibleOutcomes = ["X", "Y", "Z"];
  const outcomes = {};
  for (let i = 0; i < opponentShapes.length; i++) {
    for (let j = 0; j < possibleOutcomes.length; j++) {
      outcomes[`${opponentShapes[i]} ${possibleOutcomes[j]}`] =
        getOutcomePoints(opponentShapes[i], possibleOutcomes[j]);
    }
  }
  return outcomes;
};

const getOutcomePoints = (opponentShape, outcome) => {
  const expectedOutcome = getExpectedOutcome(outcome);
  switch (expectedOutcome) {
    case "win":
      return (
        SHAPE_POINTS[REVERSE_SHAPE_MAP[getShapeToWin(opponentShape)]] +
        OUTCOME_POINTS.win
      );
    case "draw":
      return (
        SHAPE_POINTS[REVERSE_SHAPE_MAP[getShapeToDraw(opponentShape)]] +
        OUTCOME_POINTS.draw
      );
    case "lose":
      return (
        SHAPE_POINTS[REVERSE_SHAPE_MAP[getShapeToLose(opponentShape)]] +
        OUTCOME_POINTS.lose
      );
  }
};

const getShapeToWin = (opponentShape) => {
  const opponentShapeName = SHAPE_MAP[opponentShape];
  if (opponentShapeName === "rock") return "paper";
  if (opponentShapeName === "paper") return "scissors";
  if (opponentShapeName === "scissors") return "rock";
};

const getShapeToLose = (opponentShape) => {
  const opponentShapeName = SHAPE_MAP[opponentShape];
  if (opponentShapeName === "rock") return "scissors";
  if (opponentShapeName === "paper") return "rock";
  if (opponentShapeName === "scissors") return "paper";
};

const getShapeToDraw = (opponentShape) => {
  const opponentShapeName = SHAPE_MAP[opponentShape];
  return opponentShapeName;
};

const getExpectedOutcome = (outcome) => {
  return OUTCOME_MAP[outcome];
};

const possibleOutcomesPoints = mapPossibleOutcomesWithPoints();

const turns = input.split(`\n`);
const points = turns.reduce((acc, turn) => {
  return acc + possibleOutcomesPoints[turn];
}, 0);

console.log(points);
