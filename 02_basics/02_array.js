const m_heros = ["Thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batsman"]


// m_heros.push(dc)

const xyz = m_heros.concat(dc)

// console.log(dc + m_heros)


const all = [...m_heros, ...dc]


const anotherArr = [1, 2, 3, 4, 5, [6, 7], [5, 6, [2, 2]]]

const real_another_array = anotherArr.flat(Infinity);


console.log(Array.isArray(m_heros));
console.log(Array.from('hello'))
console.log(Array.from({name: "hello"})) // Interesting will return empty array need ask for keys or values

console.log(real_another_array)


let score1 = 1
let score2 = 2
let score3 = 3


console.log(Array.of(score1, score2, score3))