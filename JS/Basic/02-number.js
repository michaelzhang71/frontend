/*
 *
 * Number
 *
 * - integer and float numbers
 * - NaN: not a number (the value of invalid calculation)
 *
 *  */

// binary oc and hex
// 1 byte = 8 bit (basic unit)
// 1KB = 1024 Bytes

let bin = 0b11111111
let oct = 0o2344
let hex = 0x234fa

console.log("bin: ", bin)
console.log("oct: ", oct)
console.log("hex: ", hex)

// NaN: != and also !== any other value including itself
console.log("NaN === NaN", NaN === NaN) // false

// isNaN(): type coersion first when non-number parameter
// Number.isNaN(): strick and accurate test of NaN (recommended always)

let n1 = NaN
let n2 = "NaN"
console.log("isNaN(n1)", isNaN(n1)) // true
console.log("isNaN(n2)", isNaN(n2)) // true

// type coersion: Number('10') --> 10 --> isNaN(10)
console.log("isNaN('10')", isNaN("10")) // false

console.log("Number.isNaN(n1)", Number.isNaN(n1)) // true
console.log("Number.isNaN(n2)", Number.isNaN(n2)) // false
console.log("Number.isNaN('10')", Number.isNaN("10")) // false

// Type Coersion: others --> number
// 1. string: NaN as long as there is no digit and more than one dot
Number("12.5") // 12.5
Number("12.5px") // NaN
Number("12.5.5") // NaN

// 2. string: empty string --> 0
console.log('Number("")', Number("")) // 0
console.log('Number(" ")', Number(" ")) // 0
console.log('Number("  ")', Number("  ")) // 0

// 3. boolean: true --> 1; false --> 0
Number(true) // 1
Number(false) // 0

// 4. null --> 0; undefined --> NaN
Number(null) // 0
Number(undefined) // NaN
Number(NaN) // NaN

// 5: object: toString() first to convert to string
// {} --> NaN
// [] --> 0
// [12] --> 12
// [12,13] --> NaN

// parseInt() and parseFloat(): only works with string (NaN for other types)
// stop at the first non-digit or 2nd dot
console.log('parseInt("12.5px")', parseInt("12.5px")) // 12
console.log('parseFloat("12.5px")', parseFloat("12.5px")) // 12.5
console.log('parseFloat("px12.5px")', parseFloat("px12.5px")) // NaN
console.log('parseFloat("3a4b12.5px")', parseFloat("3a4b12.5px")) // 3

// type coersion when ==
console.log('"10" == 10', "10" == 10) // true
console.log("null == undefined", null == undefined) // true
