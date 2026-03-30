let arr1 = [1, 2, 3, 4, 56];
let arr2 = new Array(25, 26, 56, 89);

console.log(`array one is ${arr1} \narray 2 is ${arr2}.\nThe index based accessing in js is as follows: ${arr1[2]}`);



// let arr1 = [1, 2, 3, 4, 56];
// let arr2 = new Array(25, 26, 56, 89);

// console.log(`array one is`, {arr1}, `array 2 is`, {arr2}, `the index based accessing in js is follows:`, arr1[2]);

// let arr1 = [1, 2, 3, 4, 56];
// let arr2 = new Array(25, 26, 56, 89);

// console.log(`array one is`, {arr1}, `array 2 is`, {arr2}, `the index based accessing in js is follows:`, arr1[2]);


//array methods 


arr1.push(90)

console.log(arr1)
arr1.pop();
arr1.unshift(999);// generally not used because it add an element tiothe starting of the array and shifts all the other elements no the next index 
console.log(arr1);
arr1.shift();//removes the first element from the array
console.log(arr1);
console.log(arr1.includes(77));// return true or false 
console.log(arr1.indexOf(56));
console.log(arr1.indexOf(67));// returns -1 if the element is not present in the array 

let newArr = arr1.join();
console.log(typeof(newArr))

////slice and splice 



