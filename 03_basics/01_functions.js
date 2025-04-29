function sayMyName(){
    console.log("B");
    console.log("I");
    console.log("B");
    console.log("E");
    console.log("K");
    
}

// sayMyName()

// function addTwoNum(num1,num2){
//     console.log(num1+num2);
// }

function addTwoNum(num1,num2){
   let result = num1 + num2
   return result
}
const result = addTwoNum(7,8)

// console.log(result);

function addThreeNum(n1,n2,n3){
    return n1+n2+n3
}

const Ans = addThreeNum(2,3,4)
// console.log(Ans)

function loginUserMessage(username){
    if(username === undefined)
        // (!username)
    {
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Bibek"));
// console.log(loginUserMessage());

function calculatecartPrice(...num1){
    return num1
}

// console.log(calculatecartPrice(200,400,500));


const user = {
    username : "Bibek",
    price : "199"
}

function handleObj( anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
    
}

// handleObj(user)
 handleObj({
    username : "Bibek ",
    price : 399
 })


 const myArr = [200, 100, 300]

 function returnSecondValue(getArray){
    return getArray[1]
 }

 console.log(returnSecondValue(myArr));
 