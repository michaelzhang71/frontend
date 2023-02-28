import Person from "./test/data.js"
// import math from "./test/math.js"
import { add, sub, multiply, divide } from "./test/math.js"
import fs from "fs"

console.log("Person", Person)

const a = add(10, 20)
const b = sub(20, 10)
const c = multiply(10, 20)
const d = divide(20, 5)
console.log("add", a)
console.log("sub", b)
console.log("res", c)
console.log("res1", d)

fs.writeFile("test.txt", "Helloooooo", function (err) {
  console.log(err)
})
