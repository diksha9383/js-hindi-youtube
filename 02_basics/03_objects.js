// singleton

// objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Diksha",
    "full name" : "Diksha Bhardwaz",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "diksha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "diksha@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "diksha@microsoft.com"
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS User");
}
//console.log(JsUser.greeting);

JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
