// 10 (a)

let totalSeconds = 98765;

let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;

let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;

let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

console.log(
  `${days} day, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
);


// 10(b)

let total = 0;

total += 5000;
total += 2500;
total += 1500;

console.log("After adding items:", total);

total *= 0.90;
console.log("After 10% discount:", total);

total *= 1.075;
console.log("After 7.5% VAT:", total);

total /= 3;
console.log("Per person:", total);


//10 (c)

let x = 5;
console.log("Starting value:", x);

x++;
console.log("After x++:", x);

x **= 2;
console.log("After x **= 2:", x);

x %= 7;
console.log("After x %= 7:", x);

x -= 1;
console.log("After x -= 1:", x);
