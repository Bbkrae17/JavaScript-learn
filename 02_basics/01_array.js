const myArr = [0,1,2,3,4,5]
// elements can be diff myArr=[1,"hari",true]

const myArr2 = new Array("Ram","Syam");


myArr2.push("Hari");
myArr2.pop()
myArr2.unshift("Gita") 
// shift
console.log(myArr[1]);
console.log(myArr2);

console.log(myArr2.includes("Ram"));
console.log(myArr2.indexOf("Ram"));

const myn1 = myArr2.slice(1,2)
const myn2 = myArr2.splice(1,2)
console.log(myn1)
console.log(myn2);

