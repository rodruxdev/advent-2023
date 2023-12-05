function findNaughtyStep(original: string, modified: string) {
  const originalArray = [...original];
  const modifiedArray = [...modified];
  const originalLength = originalArray.length;
  const modifiedLength = modifiedArray.length;
  if (originalLength === modifiedLength) {
    return "";
  }
  if (original === "") {
    return modifiedArray[0];
  }

  const modifiedIsLonger = modifiedLength > originalLength;
  const maxLength = modifiedIsLonger ? modifiedLength : originalLength;
  let i: number;
  for (i = 0; i < maxLength; i++) {
    if (modifiedArray[i] === originalArray[i]) {
      continue;
    }
    return modifiedIsLonger ? modifiedArray[i] : originalArray[i];
  }
}

let original = "abcd";
let modified = "abcde";
console.log(findNaughtyStep(original, modified)); // 'e'

original = "stepfor";
modified = "stepor";
console.log(findNaughtyStep(original, modified)); // 'f'

original = "abcde";
modified = "abcde";
console.log(findNaughtyStep(original, modified)); // ''
