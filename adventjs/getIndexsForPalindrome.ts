function getIndexsForPalindrome(word: string) {
  const wordArray = [...word];
  const wordLength = wordArray.length;
  let initialIndex = 0;
  let finalIndex = wordLength - 1;
  const centerIndex = Math.floor(wordLength / 2);
  type differenceType = {
    index: number;
    initialLetter: string;
    finalLetter: string;
  };
  const palindromeComparer: Array<differenceType> = [];
  while (initialIndex < centerIndex) {
    const initialLetter = wordArray[initialIndex];
    const finalLetter = wordArray[finalIndex];
    if (initialLetter !== finalLetter) {
      const difference = {
        index: initialIndex,
        initialLetter,
        finalLetter,
      };
      palindromeComparer.push(difference);
      if (palindromeComparer.length > 2) {
        return null;
      }
    }
    initialIndex++;
    finalIndex--;
  }
  if (palindromeComparer.length === 0) {
    return [];
  }
  if (palindromeComparer.length === 1) {
    if (wordLength % 2 === 1) {
      const diff = palindromeComparer[0];
      if (diff.finalLetter === wordArray[centerIndex]) {
        return [diff.index, centerIndex];
      }
      if (diff.initialLetter === wordArray[centerIndex]) {
        const finalIndex = wordLength - diff.index - 1;
        return [centerIndex, finalIndex];
      }
    }
    return null;
  }
  const [fDiff, sDiff] = palindromeComparer;
  const isSameInitialLetter = fDiff.initialLetter === sDiff.finalLetter;
  const isSameFinalLetter = fDiff.finalLetter === sDiff.initialLetter;
  if (isSameInitialLetter && isSameFinalLetter) {
    const result = [fDiff.index, sDiff.index];
    return result;
  }
  return null;
}

console.log(getIndexsForPalindrome("anna")); // []
console.log(getIndexsForPalindrome("abab")); // [0, 1]
console.log(getIndexsForPalindrome("abac")); // null
console.log(getIndexsForPalindrome("aaaaaaaa")); // []
console.log(getIndexsForPalindrome("aaababa")); // [1, 3]
console.log(getIndexsForPalindrome("rotaratov")); // null
