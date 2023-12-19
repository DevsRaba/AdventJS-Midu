/**
 * Filters an array of gifts based on the availability of materials.
 * @param {string[]} gifts - The array of gifts to be filtered.
 * @param {string[]} materials - The array of available materials.
 * @returns {string[]} - The filtered array of gifts that can be manufactured.
 */
function manufacture(gifts, materials) {
  const result = [];

  for (let gift of gifts) {
    let canManufacture = true;

    for (let char of gift) {
      if (!materials.includes(char)) {
        canManufacture = false;
        break;
      }
    }

    if (canManufacture) {
      result.push(gift);
    }
  }

  return result;
}

const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

manufacture(gifts, materials);

/**
 * Explain:
 * The provided JavaScript function manufacture is designed to determine which gifts can be made given a list of gifts and available materials.
 * The function begins by initializing an empty array result, which will hold the gifts that can be manufactured.
 * Next, the function enters a for...of loop, which iterates over each gift in the gifts array. For each gift, a boolean variable canManufacture is set to true. This variable will be used to track whether the current gift can be manufactured with the available materials.
 * Inside this loop, another for...of loop is initiated, which iterates over each character in the current gift. If the materials string does not include the current character (checked using the includes method), canManufacture is set to false and the inner loop is immediately exited using the break statement. This means that the current gift cannot be manufactured because it requires a material that is not available.
 * After the inner loop, if canManufacture is still true, it means that all the characters in the current gift are included in the materials string. Therefore, the gift can be manufactured and is added to the result array using the push method.
 * Finally, after all gifts have been checked, the function returns the result array, which contains all the gifts that can be manufactured with the available materials.
 */
