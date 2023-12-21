function maxGifts(houses: Array<number>): number {
  const dp = houses.slice(0, 2);
  for (const house of houses.slice(2)) {
    dp.push(Math.max(dp[dp.length - 1], dp[dp.length - 2] + house));
  }
  return dp[dp.length - 1];
}

console.log(maxGifts([2, 4, 2])); // 4 (4)
console.log(maxGifts([5, 1, 1, 5])); // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])); // 9 (4 + 4 + 1)
console.log(maxGifts([2, 7, 9, 3, 1, 2])); // 9 (4 + 4 + 1)
console.log(maxGifts([3, 4, 5])); // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])); // 103 (3 + 100)
console.log(maxGifts([4, 1, 1, 4, 2, 1, 5])); // 14 (4 + 4 + 5)
console.log(maxGifts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])); // 14 (4 + 4 + 5)
