//worksheet7.js objects
let person = {
    name: "Sandesh",
    cast: "Ghimire",
    age: 17,
    city: "Ilam"
};
console.log(person);

console.log(person.name);
console.log(person.cast);
console.log(person.age);

person.city = "Kathmandu";
console.log(person);

//output:
// { name: 'Sandesh', cast: 'Ghimire', age: 17, city: 'Ilam' }
// Sandesh
// Ghimire
// 17
// { name: 'Sandesh', cast: 'Ghimire', age: 17, city: 'Kathmandu' }