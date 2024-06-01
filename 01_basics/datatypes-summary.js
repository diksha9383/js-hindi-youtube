//primitive datatype

// 7 types : String, Number, Boolean, Null,undefined, symbol, Bigint

//---javascript is dynamically typed language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1234655789085343987n

//Reference(non-premitive)
//--Array, objects, functions
const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Diksha",
    age: 18,
}
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof bigNumber);

//memory 
// stack(Primitive), heap(Non-primitive)

/*let myYoutubename = "dikshabhardwazdotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);*/

//////////+++++++++++++++++++++++++++++++++++///////////////
//Stack(primitive), Heap(non-primitive)

let myYoutubename = "dikshabhardwazdotcom"

let anothername = myYoutubename
anothername = "bhardwazdikshadotcom"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}
let userTwo = userOne
userTwo.email = "diksha@google.com"
console.log(userOne.email);
console.log(userTwo.email);