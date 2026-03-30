let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);// type of date is object 

let createdDate = new Date(2023, 1,17);
console.log(createdDate.toDateString());
console.log(createdDate.toLocaleDateString());


let newCreatedDate = new Date("01-14-2022");
console.log(newCreatedDate);
