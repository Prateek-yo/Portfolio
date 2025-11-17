// const fs = require("fs");

// try {
//   const data = fs.readFileSync("example.txt", "utf-8");
//   console.log(data);
// } catch (err) {
//   console.error("Error reading file:", err.message);
// }

const fs = require("fs");

try {
  const data = fs.readFileSync("helloword.txt", "utf-8");
  console.log(data);
} catch (err) {
  console.error("Error:", err);
}

console.log("synchronous file read completed");
