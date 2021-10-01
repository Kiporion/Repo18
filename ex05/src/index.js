// Only change code below this line
let shoppingList = new Map([
  [3, "Banana"],
  [5, "Pineapple"],
  [2, "Pear"],
  [10, "Carrot"],
  [1.5, "Apple"],
]);
const arrKey = [];
for (let col of shoppingList.entries()) {
  console.log(`groceries: ${col[1]}`);
  arrKey.push(col[0]);
}
const arrValue = [];
for (let col of shoppingList.entries()) {
  console.log(`amount: ${col[0]}`);
  arrValue.push(col[1]);
}

for (let [key, value] of shoppingList) {
  console.log([value, key]);
}
// Only change code above this line

module.exports = { shoppingList, arrKey, arrValue };
