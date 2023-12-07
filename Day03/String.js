const name = "hitesh";
const repoCount = 50;
// console.log(name+ repoCount + "Value ")

console.log(`Hello My name is ${name} , My repo Count is ${repoCount}`);
const gameName = new String("mridul-mc");

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf("d"));

const newStrig = gameName.substring(0, 4);
console.log(newStrig);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "    Mridul    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mridul.com%mridulchouraisa";
console.log(url.replace("%", "."));
console.log(url.includes("cs"));
console.log(gameName.slice("-"));
