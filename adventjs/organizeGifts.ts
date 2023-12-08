function organizeGifts(gifts: string) {
  const numbersArray = gifts.split(/[a-z]/).filter((letter) => letter);
  const lettersArray = gifts.split(/\d+/).filter((letter) => letter);
  let result = "";
  for (let i = 0; i < numbersArray.length; i++) {
    const giftsCount = Number(numbersArray[i]);
    const giftType = lettersArray[i];
    const palleteCount = Math.floor(giftsCount / 50);
    const boxesCount = Math.floor((giftsCount - palleteCount * 50) / 10);
    const bagCount = giftsCount - palleteCount * 50 - boxesCount * 10;
    const pallete = `[${giftType}]`;
    result += pallete.repeat(palleteCount);
    const box = `{${giftType}}`;
    result += box.repeat(boxesCount);
    if (bagCount > 0) {
      const bag = "(" + giftType.repeat(bagCount) + ")";
      result += bag;
    }
  }
  return result;
}

const result1 = organizeGifts("76a11b");
console.log(result1);

const result2 = organizeGifts("66a11b");
console.log(result2);
