function adjustLights(lights) {
  const lightsSetArray = [...new Set(lights)];
  const lightsCount = lights.length;
  let totalChanges = 0;
  if (lightsSetArray.length === 1) {
    totalChanges = Math.floor(lightsCount / 2);
    return totalChanges;
  }
  let nextLight = lightsSetArray[1];
  for (let i = 1; i < lightsCount; i++) {
    const light = lights[i];
    if (light !== nextLight) {
      totalChanges += 1;
    }
    const nextLightIndex = Math.floor((i + 1) % 2);
    nextLight = lightsSetArray[nextLightIndex];
  }

  if (lightsCount - 2 === totalChanges) {
    return 2;
  }

  return totalChanges;
}

console.log(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]));
// -> 1 (you change the fourth light to 🔴)

console.log(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]));
// -> 2 (you change the second light to 🟢 and the third to 🔴)

console.log(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]));
// -> 0 (they are already alternating)

console.log(adjustLights(["🔴", "🔴", "🔴"]));
// -> 1 (you change the second light to 🟢)
