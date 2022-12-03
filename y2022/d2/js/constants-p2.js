const SHAPE_POINTS = {
  A: 1,
  B: 2,
  C: 3,
};

const OUTCOME_POINTS = {
  win: 6,
  draw: 3,
  lose: 0,
};

const SHAPE_MAP = {
  A: "rock",
  B: "paper",
  C: "scissors",
};

const REVERSE_SHAPE_MAP = {
  rock: "A",
  paper: "B",
  scissors: "C",
};

const OUTCOME_MAP = {
  X: "lose",
  Y: "draw",
  Z: "win",
};

module.exports = {
  SHAPE_POINTS,
  OUTCOME_POINTS,
  SHAPE_MAP,
  OUTCOME_MAP,
  REVERSE_SHAPE_MAP,
};
