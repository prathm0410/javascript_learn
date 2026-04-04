

const mysym = Symbol('key1');
// Object.create // this is called constructor method
const Jsuser ={
    name : "prathmesh",
    surname : "thakur",
    [mysym] : "key2",
    "full name":"Prathmesh Thakur",
    loggedin : true ,
    dayLoggedIn : ["monday", "tuesday", "wednesday"]
}
console.log(Jsuser.name);
console.log(Jsuser["name"]);// give the element in the form of string 
console.log(Jsuser["full name"])
console.log(typeof(Jsuser[mysym]));
// freeze 
// change karne ke liye Jsuser.email ="changed_email"
console.log(Jsuser);
// function inside object
Jsuser.Greetings = function(){
    console.log("hello js user");    
}
Jsuser.Greetings2 = function(){
    console.log(`hello js user ${this.name}`);    
}
console.log(Jsuser.Greetings());
console.log(Jsuser.Greetings2());