// Only change code below this line
function* myGenerator() {
  yield* insideGenerator1();
  yield* insideGenerator2();
  yield* insideGenerator3();
}

function* insideGenerator1() {
  var x;
  for (let i = 1; i <= 5; i++) {
    x = i;
    yield x;
  }
}

function* insideGenerator2() {
  var x;
  for (let i = 10; i <= 15; i++) {
    x = i;
    yield x;
  }
}

function* insideGenerator3() {
  var x;
  for (let i = 6; i <= 9; i++) {
    x = i;
    yield x;
  }
}

var iterator = myGenerator();
let fifteenArray = [];
for (let i = 0; i < 16; i++) {
  if (i < 15) {
    fifteenArray.push(iterator.next().value + "#");
  } else {
    fifteenArray.push(iterator.next().value + "!");
  }
}
// Only change code above this line
module.exports = { fifteenArray, myGenerator };
