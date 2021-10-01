// Only change code below this line
let rockStar = new Map([
  ["artist", "The Rolling Stones"],
  ["song", "Angie"],
  ["album", "Goats Head Soup"],
  ["singer", "Mick Jagger"],
]);

let newRock = new Map();

for (let key of rockStar.entries()) {
  if (!key[0].includes("a")) {
    newRock.set(`${key[0]}`, `${key[1]}`);
  }
}
console.log(newRock);
// Only change code above this line
module.exports = { rockStar, newRock };
