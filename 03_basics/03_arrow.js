const user = {
    username: "diksha",
    price: 999,

    welcomeMassage: function(){
        console.log(`${this.username}, welcomw to website`);
    }
}

// user.welcomeMassage()
// user.username = "Sam"
// user.welcomeMassage()

// console.log(this);

// function chai (){
//     let username = "diksha"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "diksha"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "diksha"
    console.log(this);
}
//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1+num2)

const addTwo = (num1, num2) => ({username: "diksha"})
console.log(addTwo(3, 4));

