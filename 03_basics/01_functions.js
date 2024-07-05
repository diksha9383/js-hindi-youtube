function sayMyName(){
console.log("D");
console.log("I");
console.log("K");
console.log("S");
console.log("H");
console.log("A");
}
//sayMyName()

// function addTwoNumbers(num1, num2){
//       console.log(num1+num2);
// }

function addTwoNumbers(num1, num2){
    //  let result = num1+num2
    //  return result
    return num1+ num2
}
const result = addTwoNumbers(3, 4)

//console.log("Result: ", result);
function loginUserMessage(username = "diksha"){
    if(username === undefined){ //if(!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
 
// console.log(loginUserMessage("diksha"));

//console.log(loginUserMessage());

// ...this three dot is used here as rest operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
     username: "diksha",
     price: 199
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({
    username: "diksha",
    price: 399
})

const myNewArray = [2000, 400, 100, 600]

function returnsecondValue(getArray){
    return getArray[1]
}
console.log(returnsecondValue(myNewArray)); //or
console.log(returnsecondValue([2000, 400, 100, 600]));

