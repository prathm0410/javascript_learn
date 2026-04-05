//const bumbleUser = new Object();// singleton object
const bumbleUser ={}// non singleton object
bumbleUser.user ="prathmesh thakur";
bumbleUser.id ="123";
bumbleUser.loggedin=false;
console.log(bumbleUser);


const normalUser ={
    username : {
        fullname :{
            firstname: "prathmesh",
            lastname:"thakur"
        }
    }
}
console.log(normalUser.username)

const obj1={1:'a',2:'b'};
const obj2={3:'a',4:'b'};
//const obj3={obj1,obj2};// typical object ke and object waala problem
//const obj3= Object.assign(obj1,obj2);
//const obj3= Object.assign({},obj1,obj2);// this is a good practice


// spread bhi use kar sakte hain directly
const obj3= {...obj1,...obj2};

console.log(obj3);
console.log(Object.keys(bumbleUser));// returns value in the form of array and this results to easier access 
console.log(Object.values(bumbleUser));
console.log(Object.entries(bumbleUser));
console.log(bumbleUser.hasOwnProperty("loggedin"));// to check for the element inside the object 



//destructuring of objects
const course={
    coursename:"js in hindi",
    coursefee:"999",
    courseinstructor:"hitesh choudhary"
}
const{courseinstructor: ins}=course;
console.log(courseinstructor);
console.log(ins);// this is called destructuring the object   