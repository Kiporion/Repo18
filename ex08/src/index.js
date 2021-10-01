// Only change code below this line
let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);
let unionSet = new Set([...one, ...two]);
let intersectionSet = new Set();
let differenceSet = new Set();

for (uni1 of one) {
  for (uni2 of two) {
    if (uni1 === uni2) {
      intersectionSet.add(uni1);
    }
  }
}
for (uni1 of one) {
  for (uni2 of two) {
    differenceSet.add(uni1);
  }
}
for (uni2 of two) {
  for (uni1 of one) {
    if (uni1 === uni2) {
      differenceSet.delete(uni1);
    }
  }
}

console.log(unionSet);
console.log(intersectionSet);
console.log(differenceSet);

// Only change code above this line
module.exports = { unionSet, intersectionSet, differenceSet };
