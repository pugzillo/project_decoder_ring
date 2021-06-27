// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  // Unique characters in a string
  function findUnique(str) {
    str = str.split("");
    str = new Set(str);
    return [...str].join("");
  }

  function substitution(input, alphabet, encode = true) {
    if(alphabet === undefined || findUnique(alphabet).length !== 26 ) return false; // returns false if no alphabet parameter is included or if invalid
  
    // Creating cipher object
    const keys = alphabet.split("");
    const values = "abcdefghijklmnopqrstuvwxyz".split("");
    let cipher = {};
    keys.forEach((key, index) => cipher[key] = values[index]);

    const inputArray = input.toLowerCase().split("");
    let result = [];

    if(encode) {
      result = inputArray.map((char) => {
        for (let key of Object.keys(cipher)) {
          if (char === cipher[key]) {
            return key;
          } else if (char === " ") {
            return char;
          }
        }
      })
    } else {
      result = inputArray.map((char) => {
        for (let key of Object.keys(cipher)) {
          if (char === key) {
            return cipher[key];
          } else if (char === " ") {
            return char;
          }
        }
      })
    }

    return result.join("");

  }

  return {
    substitution,
  };
})();

console.log(substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"));

module.exports = { substitution: substitutionModule.substitution };
