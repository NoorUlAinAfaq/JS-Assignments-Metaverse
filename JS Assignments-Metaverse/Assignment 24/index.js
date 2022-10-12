let car = 'subaru';
let case_ = 'A'
let _case = 'a'
let _num = 9;
let num_ = 10;

let arr = [1,2,3,4]

console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

console.log("Is car == 'honda'? I predict False.")
console.log(car == 'honda')

console.log(case_ == case_.toLowerCase())

console.log(_case == _case.toLowerCase() && case_ == case_.toLowerCase())

console.log(_num >= 10 || num_ >= 10)
console.log(arr.includes(3))
console.log(arr.includes(10))