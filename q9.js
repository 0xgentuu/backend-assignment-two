42, "42", true, null, undefined, [1, 2, 3], { a: 1 }, function () {}, NaN

console.log(typeof 42);

console.log(typeof "42");

console.log(typeof true);

console.log(typeof null);

console.log(typeof undefined);

console.log(typeof [1, 2, 3]);

console.log(typeof { a: 1 });

console.log(typeof function () {});

console.log(typeof NaN);

// 9(C)
function getType(value) {
if (value === null) return "null";
if (Array.isArray(value)) return "array";
return typeof value;
}

console.log(getType());