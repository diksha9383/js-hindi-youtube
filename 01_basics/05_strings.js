const name = "Diksha"
const repoCount = 50

console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String ('diksha-db')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStrngOne = "   diksha  "
console.log(newStrngOne);
console.log(newStrngOne.trim());

const url = "https://diksha.com/diksh%20bhardwaz"
console.log(url.replace('%20', '-'));

console.log(url.includes('bhardwaz'));

console.log(gameName.split('-'));

console.log(gameName.concat());
console.log(gameName.blink());

