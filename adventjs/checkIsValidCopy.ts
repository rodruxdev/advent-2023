function checkIsValidCopy(original: string, copy: string) {
  const originalArray = [...original];
  const copyArray = [...copy];
  const degradingSymbols = ["#", "+", ":", ".", " "];
  const wordLength = originalArray.length;
  for (let i = 0; i < wordLength; i++) {
    const originalL = originalArray[i];
    const copyL = copyArray[i];
    const isSameLetter = originalL === copyL;
    const lowerOriginalL = originalL.toLowerCase();
    const isLowerCase = lowerOriginalL === copyL;
    const isSpace = originalL === " ";
    const isDegradingSymbols = degradingSymbols.includes(copyL) && !isSpace;
    if (!isLowerCase && !isDegradingSymbols && !isSameLetter) {
      return false;
    }
  }
  return true;
}

console.log(checkIsValidCopy("Santa Claus is coming", "sa#ta cl#us is comin#")); // true
console.log(checkIsValidCopy("Santa Claus is coming", "p#nt: cla#s #s c+min#")); // false (for the initial p)
console.log(checkIsValidCopy("Santa Claus", "s#+:. c:. s")); // true
console.log(checkIsValidCopy("Santa Claus", "s#+:.#c:. s")); // false (there is a # where it should not be)
