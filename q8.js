let a = 10;
let b = a;
b = 20; // Reassigned

console.log(a, b);
 
let userOne = { name: "Amaka", age: 22 };
let userTwo = userOne;
userTwo.age = 40; // Reassigned

console.log(userOne.age);


/*

// (8b) THE SPREAD OPERATOR

let userOne = { name: "Amaka", age: 22 };
let userTwo = { ...userOne };
userTwo.age = 40;

*/

// THE ADDRESS PROPERTY TEST
let personOne = { address: { city: "Lagos" }};
let personTwo = {...personOne}

personTwo = { address: { city: "Abuja" }};

console.log(personTwo.address.city, personOne.address.city);

