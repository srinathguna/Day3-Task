let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

// Convert objects to JSON strings with sorted keys and compare
let json1 = JSON.stringify(obj1, Object.keys(obj1).sort());
let json2 = JSON.stringify(obj2, Object.keys(obj2).sort());

let areEqual = json1 === json2;

console.log(areEqual); // Output: true
