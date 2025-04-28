const marvel_heros = ["thor","spiderman","ironman"]
const dc_heros = ["superman","flash"]
const nepali_heros = ["Shankar","Momin"]

// marvel_heros.push(dc_heros)
// const heros = marvel_heros.concat(dc_heros)

const heros = [...marvel_heros,...dc_heros,...nepali_heros]  
// spread technique to add more then two arrays
console.log((heros));

const jpt_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_jpt_array = jpt_array.flat(Infinity)

console.log(real_jpt_array);

// console.log(Array.from("Bibek"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


