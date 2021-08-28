/* 
Dog Years - Convert your age to ""dog years""
The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years 
*/

var myAge = 45; 
var earlyYears = 2 * 10.5; // conversion of first two dog years
var laterYears = myAge - 2; // Your age minus the first two dog years

console.log(earlyYears);
console.log(laterYears);

myAgeInDogYears = earlyYears + laterYears;

myName = "Cindy".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);