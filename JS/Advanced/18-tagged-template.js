/* tagged template */

const title = "Javascript";
const course = {
  tutor: "Max",
  length: 16,
  level: "advanced",
};

function foo(...args) {
  console.log(args);
}

foo(1, 2, 3);

foo`the course titled ${title} with the following information ${course}`;
