const userEmail ="abc@gmail.com"


// falsy values false, 0 ,-0,BigInt 0n, "",null,undefined,NaN
// truthy values "0","false"," ",{},[],function(){}


const useremail=[]
if(useremail.length===0){
    console.log("heloo this is an empty array")
}
const newuser={}
if(Object.keys(newuser)===0){
    console.log("helooo this is an empty object")
}
// nullish coalescing operator (??): null undefined --> null and undefined value ke wajah se program corrupt naa ho jaaye iss liye 
// terniary operator is different from it --> condition ? true : false