let raceNumber = Math.floor(Math.random() * 1000);

var early = true;
var age = 37;

if (age > 18 && raceNumber >= 1000) {
  raceNumber = 1000 + raceNumber;
}

if (age > 18 && raceNumber >= 1000) {
  console.log('Your race start time is 9:30 am. Race Number: ' + raceNumber);
} else if (age > 18 && raceNumber <= 1000) {
  console.log('Your race start time is 11:00 am. Race Number: ' + raceNumber);
} else if (age < 18) {
  console.log('Your race time is 12:30 pm. Race Number: ' + raceNumber);
} else {
  console.log("Please see the registration desk.");
}
