function drawGift(size: number, symbol: string): string {
  if (size === 1) {
    return "#\n";
  }
  const giftSize = size * 2 - 1;
  const hash = "#";
  const space = " ";
  const firstRow = space.repeat(size - 1) + hash.repeat(size);
  const lastRow = hash.repeat(size);
  const middleRow = hash.repeat(size) + symbol.repeat(size - 2) + hash;
  const giftInitialArray: Array<string> = [firstRow];
  const giftFinalArray: Array<string> = [lastRow];
  const normalFace = hash + symbol.repeat(size - 2) + hash;
  for (let i = 0; i < size - 2; i++) {
    const spacesQuantity = giftSize - (size + 1 + i);
    const sideFace = symbol.repeat(i) + hash;
    const newInitialRow = space.repeat(spacesQuantity) + normalFace + sideFace;
    const newFinalRow = normalFace + sideFace;
    giftInitialArray.push(newInitialRow);
    giftFinalArray.unshift(newFinalRow);
  }
  const giftArray = [...giftInitialArray, middleRow, ...giftFinalArray];
  const result = giftArray.join("\n") + "\n";
  return result;
}

console.log(drawGift(4, "+"));

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, "*"));
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(2, "^"));
/*
#
*/
