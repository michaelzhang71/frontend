/*
 *
 * globalThis
 *
 *  */

console.log(global === globalThis)
// console.log("global: ", global)
// console.log("globalThis: ", globalThis)

// module global
console.log(__dirname)
console.log(__filename)

// process
// console.log("process", process)

console.log("start ----")

setTimeout(() => {
  console.log("setTimeout")
}, 0)

setImmediate(() => {
  console.log("setImmediate")
})

process.nextTick(() => {
  console.log("nextTick")
})

console.log("end --------")
