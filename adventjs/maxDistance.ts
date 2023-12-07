function maxDistance(movements) {
  const movementsArray = [...movements];
  const movementsType = {
    ">": "forward",
    "<": "backward",
    "*": "wildcard",
  };
  const movementsRegister = movementsArray.reduce(
    (result, movement) => {
      const movementType = movementsType[movement];
      result[movementType] += 1;
      return result;
    },
    { forward: 0, backward: 0, wildcard: 0 }
  );
  const { forward, backward, wildcard } = movementsRegister;
  const forwardAdvance = forward + wildcard - backward;
  const backwardAdvance = backward + wildcard - forward;
  if (forwardAdvance > backwardAdvance) {
    return forwardAdvance;
  } else {
    return backwardAdvance;
  }
}

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
