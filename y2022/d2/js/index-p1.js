const fs = require("fs");
const input = fs.readFileSync("../input.txt", "utf8");
const { SHAPE_POINTS, OUTCOME_POINTS, SHAPE_MAP } = requite("./constants.js");

const mapPossibleOutcomesWithPoints = () => {
  const opponentShapes = ["A", "B", "C"];
  const ownShapes = ["X", "Y", "Z"];
  const outcomes = {};
  for (let i = 0; i < opponentShapes.length; i++) {
    for (let j = 0; j < ownShapes.length; j++) {
      outcomes[`${opponentShapes[i]} ${ownShapes[j]}`] = getOutcomePoints(
        opponentShapes[i],
        ownShapes[j]
      );
    }
  }
  // Create new file with all possible outcomes
  fs.writeFileSync("./outcomes-p1.json", JSON.stringify(outcomes));
  return outcomes;
};

const getOutcomePoints = (opponentShape, ownShape) => {
  const ownPointsShape = SHAPE_POINTS[ownShape];
  const ownPointsOutcome = OUTCOME_POINTS[getOutcome(opponentShape, ownShape)];
  return ownPointsShape + ownPointsOutcome;
};

const getOutcome = (opponentShape, ownShape) => {
  const opponentShapeName = SHAPE_MAP[opponentShape];
  const ownShapeName = SHAPE_MAP[ownShape];
  if (opponentShapeName === ownShapeName) return "draw";
  if (opponentShapeName === "rock" && ownShapeName === "scissors")
    return "lose";
  if (opponentShapeName === "scissors" && ownShapeName === "paper")
    return "lose";
  if (opponentShapeName === "paper" && ownShapeName === "rock") return "lose";

  return "win";
};

const possibleOutcomesPoints = mapPossibleOutcomesWithPoints();

const turns = input.split(`\n`);
const points = turns.reduce((acc, turn) => {
  return acc + possibleOutcomesPoints[turn];
}, 0);

console.log(points);
