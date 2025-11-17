// console.log("Hello, Node!");
// console.log("hey")

// const fullname="

// const figlet =require('figlet')
// const art =figlet.textSync("Hey..!!!")
// const art1 =figlet.textSync("HELLO..!!!")
// const art2 =figlet.textSync("YOOOOOO..!!!!")
// // console.log(art)
// // console.log(art1)
// // console.log(art2)

// console.log("Hello")


const fs = require("fs");

try {
    const data = fs.readFileSync('./example.txt', 'utf-8'); 
    console.log(data);
} catch (err) {
    console.error("Error reading file:", err.message);
}
