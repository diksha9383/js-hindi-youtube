//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser ={
    email: "diksha@gmail.com",
    fullname: {
        userfullname: {
            firstname: "diksha",
            lastname: "bhardwaz"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "d@gmail.com"
    },
    {
        id: 3,
        email: "f@gmail.com"
    }
]
user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor : "diksha"
}

// course.courseInstructor 

const {courseInstructor: instructor} = course 

console.log(instructor);

//******JSON********** */
// {
//     "name": "diksha",
//     "coursename": "js in hindi",
//     "price": "free"
// }
