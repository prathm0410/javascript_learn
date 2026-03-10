// // there are two types of datatypes 
// //primitive and non primitive  

// // primitive : string , number, boolean, null, undefined, Symbol, BigInt



// // reference type/ non primitive : Array, objects, functions
// // dynamically typed

// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId)  //here the importance of symbol itself is to set the value of each input unique different from the previos one 
// const bigNumber = 16545454546741879987445565n



// // reference type 

// const superHeroes =["shaktimaan", "hero", "daga"]
// let myObj={
//   name : "prathmesh",
//   age: 22
// }
// const myFunction=function(){

// }


// console.table([typeof(superHeroes),typeof(myObj),typeof(myFunction)])




// // two diiferent types of the memory

// let newName="pratham deep"
// let anotherName=newName
// anotherName="jai bhawani"
// console.log(newName)
// console.log(anotherName);


let user = {
    name : "aditya",
    email : "aditya@gamil.com",
    phoneNo : "7295032511"
}

let usertwo=user

user.name="raviraj"


console.log(user)
console.log(usertwo)