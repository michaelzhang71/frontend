/* structuredClone */

const p1 = {
  name: "Joyce",
  info: {
    grade: 6,
  },
  // study() {
  //   console.log("study");
  // },
};

const p2 = structuredClone(p1);

console.log("p1===p2: ", p1 === p2);
console.log("p1", p1);
console.log("p2", p2);

p2.info.grade = 7;
console.log("p1.info.grade", p1.info.grade);
console.log("p1", p1);
console.log("p2", p2);
