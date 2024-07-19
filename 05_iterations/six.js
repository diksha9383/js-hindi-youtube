//const coding ["js", "ruby", "


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //const newNums = myNums.filter( (num) => num > 4)
// const newNums = myNums.filter( (num) => { 
//     return num > 4
// })
//console.log(newNums);

const newNums = []

myNums.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
})
//console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1985, edition: 2000},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2002},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1986, edition: 2004},
    { title: 'Book Five', genre: 'Science', publish: 1986, edition: 2018},
    { title: 'Book Six', genre: 'Fiction', publish: 1970, edition: 2024},
    { title: 'Book Seven', genre: 'History', publish: 1981, edition: 1954},
    { title: 'Book Eight', genre: 'Fiction', publish: 1970, edition: 2007},
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1987, edition: 2010},
    { title: 'Book Ten', genre: 'History', publish: 2003, edition: 1998},
];
let userBooks = books.filter( (bk) => bk.genre === 'History')
userBooks = books.filter( (bk) => { return bk.publish >= 1980 && bk.genre === "Non-Fiction"})
console.log(userBooks);

