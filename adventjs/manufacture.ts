function manufacture(gifts: Array<string>, materials: string): Array<string> {
  const result: Array<string> = [];
  for (let i = 0; i < gifts.length; i++) {
    const gift = gifts[i];
    const setGift = new Set([...gift]);
    const setMaterials = new Set([...materials]);
    const hasEnoughMaterials = [...setGift].every((letter) => {
      return setMaterials.has(letter);
    });
    if (hasEnoughMaterials) {
      result.push(gift);
    }
  }
  return result;
}

let gifts = ["tren", "oso", "pelota"];
let materials = "tronesa";

console.log(manufacture(gifts, materials)); // ["tren", "oso"]

gifts = ["juego", "puzzle"];
materials = "jlepuz";

console.log(manufacture(gifts, materials)); // ["puzzle"]

gifts = ["libro", "ps5"];
materials = "psli";

console.log(manufacture(gifts, materials)); // []
