// import student, { sum as total, title } from "./test/data.js"
import student, * as moduleA from "./test/data.js"
console.log("student", student)
console.log("total(10,20)", moduleA.sum(10, 20))
console.log("title", moduleA.title)
