//immediately invoked  function expressions IIFE
//iife is used to so that function can be called immediately and avoid the global scope pollution
// Key Characteristics
// Runs immediately
// Creates private scope
// Prevents global variable conflicts
// Often wrapped in () to treat function as expression
// 🔹 When NOT to use IIFE (modern JS)

// Today, IIFE is less common because:

// let and const provide block scope
// ES6 modules (import/export) handle encapsulation better
(function chai(){
    console.log("chai piyo biskit khaao")
})();// ye ; issliye aaya kyunki function ko nahi pata ki context kaha khatam karna hai 
((name)=>{
    console.log(`chai piyo mat biskit khaao ${name}`)
})("hitesh"); 