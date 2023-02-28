/*
 *
 * command: node 01-input-output.js 10 20
 * process.argv
 * [
 * '/usr/local/bin/node',
 * '/Users/joyce/Projects/frontend/Node/01-input-output.js',
 * '10',
 * '20'
 * ]
 *
 *  */

console.log("process.argv", process.argv)

const [nodePath, filePath, num1, num2] = process.argv
console.log("nodePath", nodePath)
console.log("filePath", filePath)
console.log("num1", num1, typeof num1)
console.log("num2", num2, typeof num2)
