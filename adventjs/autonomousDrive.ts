function autonomousDrive(store: string[], movements: string[]) {
  const robotIndexes = { x: NaN, y: NaN };
  for (let i = 0; i < store.length; i++) {
    const row = store[i];
    const robot = RegExp("!");
    const match = robot.exec(row);
    if (match !== null) {
      robotIndexes.x = match.index;
      robotIndexes.y = i;
      break;
    }
  }
  const newRobotIndexes = { ...robotIndexes };
  const rowMovements = { R: 1, L: -1 };
  const columMovements = { U: -1, D: 1 };
  movements.forEach((movement) => {
    let nextRow = newRobotIndexes.x;
    let nextColumn = newRobotIndexes.y;
    if (rowMovements[movement]) {
      nextRow += rowMovements[movement];
    }
    if (columMovements[movement]) {
      nextColumn += columMovements[movement];
    }
    if (store[nextColumn]) {
      const newPosition = [...store[nextColumn]][nextRow];
      if (newPosition !== "*" && newPosition) {
        newRobotIndexes.x = nextRow;
        newRobotIndexes.y = nextColumn;
      }
    }
  });
  if (
    newRobotIndexes.x === robotIndexes.x &&
    newRobotIndexes.y === robotIndexes.y
  ) {
    return store;
  }
  const finalCol = store[newRobotIndexes.y];
  const newRow =
    finalCol.slice(0, newRobotIndexes.x) +
    "!" +
    finalCol.slice(newRobotIndexes.x + 1);
  store[newRobotIndexes.y] = newRow;
  const originalCol = store[robotIndexes.y];
  const originalRow =
    originalCol.slice(0, robotIndexes.x) +
    "." +
    originalCol.slice(robotIndexes.x + 1);
  store[robotIndexes.y] = originalRow;
  return store;
}

const store = ["..!....", "...*.*."];

const movements = ["R", "R", "D", "L"];
const result = autonomousDrive(store, movements);
console.log(result);
/*
[
  ".......",newRow
  "...*!*."
]
*/
