function calculateTime(deliveries: Array<string>) {
  let resultTime = -25200;
  let leftOverString = "";
  deliveries.forEach((time) => {
    const timeArray = time.split(":");
    const hoursInS = Number(timeArray[0]) * 3600;
    const minutesInS = Number(timeArray[1]) * 60;
    const seconds = Number(timeArray[2]);
    const deliveryTime = hoursInS + minutesInS + seconds;
    resultTime += deliveryTime;
  });
  if (resultTime < 0) {
    leftOverString = "-";
    resultTime *= -1;
  }
  const hours = Math.floor(resultTime / 3600);
  resultTime -= hours * 3600;
  const minutes = Math.floor(resultTime / 60);
  resultTime -= minutes * 60;
  const hoursRes = hours < 10 ? `0${hours}` : hours.toString();
  const minRes = minutes < 10 ? `0${minutes}` : minutes.toString();
  const secRes = resultTime < 10 ? `0${resultTime}` : resultTime.toString();
  const result = `${leftOverString}${hoursRes}:${minRes}:${secRes}`;
  return result;
}

console.log(calculateTime(["00:10:00", "01:00:00", "03:30:00"]));
// '-02:20:00'

console.log(calculateTime(["02:00:00", "05:00:00", "00:30:00"]));
// '00:30:00'

console.log(calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"])); // '-05:29:00'
