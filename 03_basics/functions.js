function sayMyName(){
    console.log("p");
    console.log("r");
    console.log("a");
    console.log("t");
    console.log("h");
    console.log("a");
    console.log("m");
}

sayMyName();// execution of the function


function addtwonumber(number1, number2){
    console.log(number1+number2)
}
function addtwonumbers(number1, number2){
    let result=number1+number2;
    return result
}
addtwonumber(9,10);
const res = addtwonumbers(10,12)
console.log(res);

function loginUserMessage(username="sam"){
    return `${username} just logged in `
}

console.log(loginUserMessage("garvati"));// jab kuch bhi paas nahi karoge the result comes out to be undefined 



function calculatecartprice(val1, val2, ...num1){
    return num1
}
console.log(calculatecartprice(200,300,400,20000))

const user={
    name :"dishwasher" ,
    price : 233
}

function handleobj(anyobject){
    console.log(`the price of the product ${anyobject.name} is ${anyobject.price}`)
}

handleobj(user);

const myNewArray=[200,300,400,500]

function handlearray(getarray){
    return getarray[1];
}

console.log(handlearray(myNewArray))
// scope -->