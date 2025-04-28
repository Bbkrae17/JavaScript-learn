// primitive and non primitive 

// # Primitive 
// 7 types : String, Number, Boolean, Null, undefined, symbol, BigInt


// Reference (Non primitive)
// Array, Objects, Functions

//  #note
// js = dynamic type
// typescript

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// memory type 
// Stack (primitive) , Heap(Non-primitive)

// let myYouname = "sync.17"
// let anothername = myYouname
// anothername = "Bbkrae"
// console.log(anothername);
// console.log(myYouname);

let user ={
    email: "raibibek95@gmail.com",
    Id : 12

}

let user2 = user
user2.email = "Bbkrae95@gmail.com"
console.log(user2);

