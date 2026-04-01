let marvel_heroes =["thor","hulk", "ironman","captain"];
let dc_heroes=["batman","superman","flash"];

// marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);// this merges the new aray at the end of the array not as element but as a single array, creating it a 2d array.

let all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes);// same kaam hua hai baabu

const all_new_heroes=[...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);


let another_array=[1,2,3,[6,9,12,15,18],4,5,6,[12,18,24],7,8,9];
let another_array1=another_array.flat(1);
console.log(another_array1);


console.log(Array.isArray('hitesh'));// to verify for an array
console.log(Array.from("hitesh"));// to convert into an array


let score1 = 200;
let score2 = 300;
let score4 = 400;


console.log(Array.of(score1, score2, score4));
