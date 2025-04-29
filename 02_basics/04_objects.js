// const tinderUser = new Object()
// const tinderUser = {}
// tinderUser.id = "123"
// tinderUser.name = "Bibek"


// console.log(tinderUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"} 
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({},obj1 , obj2, obj4)

console.log(obj3);

const course = {
    coursename : "Js in Nepali",
    price : "999",
    Instructor : "Hitesh"
}

const {Instructor} = course;

console.log(Instructor);

