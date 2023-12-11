function createChristmasTree(ornaments, height) {
  const ornamentsArray = [...ornaments];
  const ornamentsTotalCount = ornamentsArray.length;
  const space = " ";
  let ornamentCount = 0;
  let result = "";
  for (let i = 0; i < height; i++) {
    const intialSpacesCount = height - i - 1;
    let row = intialSpacesCount > 0 ? space.repeat(intialSpacesCount) : "";
    for (let j = 0; j < i + 1; j++) {
      const ornamentIndex = ornamentCount % ornamentsTotalCount;
      row += `${ornamentsArray[ornamentIndex]} `;
      ornamentCount++;
    }
    row = row.trimEnd();
    row += "\n";
    result += row;
  }
  result += space.repeat(height - 1) + "|\n";
  return result;
}

console.log(createChristmasTree("123", 4));
//    1
//   2 3
//  1 2 3
// 1 2 3 1
//    |
console.log(createChristmasTree("*@o", 3));
//   *
//  @ o
// * @ o
//   |
