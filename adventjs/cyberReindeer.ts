function cyberReindeer(road: string, time) {
  let roadArray = [...road];
  let actualRoad = road;
  const result: string[] = [actualRoad];
  let previousPath = ".";
  let santaIndex = 0;
  for (let i = 0; i < time - 1; i++) {
    if (i === 4) {
      actualRoad = actualRoad.replaceAll("|", "*");
      roadArray = [...actualRoad];
    }
    if (roadArray[santaIndex + 1] === "|") {
      actualRoad = roadArray.join("");
      result.push(actualRoad);
      continue;
    }
    const nextPath = roadArray[santaIndex + 1];
    roadArray[santaIndex + 1] = roadArray[santaIndex];
    roadArray[santaIndex] = previousPath;
    previousPath = nextPath;
    actualRoad = roadArray.join("");
    result.push(actualRoad);
    santaIndex++;
  }
  return result;
}

const road1 = "S..|...|..";
const time1 = 10; // units of time
const result1 = cyberReindeer(road1, time1);
console.log(result1);

/* -> result:
  [
    'S..|...|..', // initial state
    '.S.|...|..', // sled advances on the road
    '..S|...|..', // sled advances on the road
    '..S|...|..', // sled stops at the barrier
    '..S|...|..', // sled stops at the barrier
    '...S...*..', // barrier opens, sled advances
    '...*S..*..', // sled advances on the road
    '...*.S.*..', // sled advances on the road
    '...*..S*..', // sled advances on the road
    '...*...S..', // passes through the open barrier
  ]
  */
