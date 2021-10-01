// Only change code below this line
function* myGenerator(x, y, z) {
  yield* [1, 2, 3, 4, 5];
  yield* "Arena";
  yield* arguments;
}

let iterator = myGenerator(6, 7, 8);
const generatorArray = [];
for (value of iterator) {
  generatorArray.push(value);
}
console.log(generatorArray);

// Only change code above this line
module.exports = { generatorArray, myGenerator };
