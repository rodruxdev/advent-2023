function decode(message) {
  const flippingIndexes: { init: number; end: number } = {
    init: -1,
    end: -1,
  };
  let messageArray = [...message];
  const messageLength = messageArray.length;
  for (let i = 0; i < messageLength; i++) {
    const letter = messageArray[i];
    if (letter === "(") {
      flippingIndexes.init = i;
    } else if (letter === ")") {
      flippingIndexes.end = i;
      break;
    }
  }

  if (flippingIndexes.init === -1) {
    return message;
  }

  const initIndex = flippingIndexes.init;
  const endIndex = flippingIndexes.end;
  const initArray = messageArray.slice(0, initIndex);
  const initString = initArray.join("");
  const finishArray = messageArray.slice(endIndex + 1, messageLength);
  const finishString = finishArray.join("");
  const flippedArray = messageArray.slice(initIndex + 1, endIndex).reverse();
  const flippedString = flippedArray.join("");
  let resultString = initString + flippedString + finishString;
  resultString = decode(resultString);
  return resultString;
}

const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus
