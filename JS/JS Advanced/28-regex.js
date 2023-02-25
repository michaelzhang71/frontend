/*
 *
 * Regular expression
 * pattern + flag
 * to match, replace, search string pattern in target string
 *
 * methods:
 *
 * Regex:
 *  - exec
 *  - test
 *
 * String:
 *  - match
 *  - matchAll
 *  - replace
 *  - replaceAll
 *  - split
 *  - search
 *
 *  */

const re = new RegExp("abc", "ig");
const reg = /abc/gi;

const message = "abc Abc abccc vsabc";

// test()
console.log("reg.test(message)", reg.test(message));

// replace abc with cba
const newMessage = message.replaceAll(/abc/gi, "XXX");
console.log("message", message);
console.log("newMessage", newMessage);

// character classes
\d: digit --> \D
\s: space-- > \S 
\w: [a - zA - Z0 -9_] ---> \W 

// anchor
^: start 
$: end 
  
