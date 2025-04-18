// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
//The resson is that an equality check == and > <, >=, <= work differently
//Comparision convert null to a number, treating it as 0.
//That's why 3 null >=0 is true and (1)null >0 is use. 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0 );

//===
console.log( "2" === 2);
