/**
 * Finds the first repeated gift in an array of gifts.
 * @param {Array} gifts - The array of gifts.
 * @returns {any} - The first repeated gift, or -1 if no repeated gift is found.
 */
function findFirstRepeated(gifts) {
  const mapa = new Set();
  for (const gift of gifts) {
    if (mapa.has(gift)) {
      return gift;
    }
    mapa.add(gift);
  }
  return -1;
}

const giftIds = [2, 1, 3, 5, 3, 2];
const giftIds2 = [1, 2, 3, 4];
const giftIds3 = [5, 1, 5, 1];

findFirstRepeated(giftIds);

/**
 * Explain:
 * The provided JavaScript function findFirstRepeated is designed to find the first repeated element in an array named gifts.
 * The function begins by creating a new Set object, mapa. A Set is a built-in JavaScript object that stores unique values of any type. It's important to note that a value in the Set can only occur once; it is unique in the Set's collection.
 * Next, the function enters a for...of loop, which iterates over each element (gift) in the gifts array.
 * Inside the loop, the function checks if the current gift is already present in the mapa Set using the has method. If the gift is found in the mapa Set, it means this gift is a repeated element (since it has appeared before in the iteration), and the function immediately returns this gift.
 * If the gift is not found in the mapa Set, it is added to the Set using the add method. The loop then moves on to the next gift in the gifts array.
 * If the function iterates over the entire gifts array without finding any repeated elements, it returns -1. This is a common convention to indicate that the desired element was not found in the array.
 */
