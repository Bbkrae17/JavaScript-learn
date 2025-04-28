// singleton constructor
// Object.create
// object literals
const JsUser = {
    name:"Bibek",
    "full name": "Bibek Rai",
    sub:"BCS",
    address:"Kathmandu",
    isLoggedIn : false,
    lastLoginDays: ["Sunday","Mpnday"]
}

console.log(JsUser);
console.log(JsUser["full name"]);

JsUser.greeting = function(){
    console.log(`Hello JsUser, ${this.name}`);
    
}

JsUser.greeting();