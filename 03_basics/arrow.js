//  const user ={
//     username : "pratham",
//     price : 999,
//     welcomeMessage : function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     } 
// }

// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage()// this is used to define the context of the flow of the control



// console.log(this)// empty out put as no global context present 


// const chai=function (){
//     let username = "pratham"
//     console.log(this.username);
// }
// arrow function 

const chai= ()=>{
    let username = "pratham"
    console.log(this.username);
}
chai()


// const addtwo =(num1,num2) => {
//     return num1+num2
// }

const addtwo =(num1,num2) =>(num1+num2)// implicit return 
console.log(addtwo(2,3))