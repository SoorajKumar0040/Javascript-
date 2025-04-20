const name = "suraj"
const repoCount = 50

// console.log(name + repoCount + "value"); this is syntax is bad 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//this type of syntax will be followed

const gameName = new String('suraj-sh-com')
 
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString  = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "    sooraj    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "hhtp://sooraj.com/sooraj%20singh"
console.log(url.replace('%20','-'));

console.log(url.includes('sooraj'));
console.log(url.includes('hindu'));
console.log(gameName.split('-'));
