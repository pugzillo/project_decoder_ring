// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function _translateIndexToLetter(index) {
    if (index < 26 && index >= 0) {
      return alphabet[index]; // within the alphabet range
    } else if (index < 0) {
      return alphabet[26 + index]; // convert negative indexes into positive alphabet range
    } else if (index >= 26) {
      return alphabet[index - 26]; // convert indexes beyond range into alphabet range
    }
  }

  function caesar(input, shift = 0, encode = true) {
    if (shift < -25 || shift > 25 || shift === 0) return false;
    const inputArray = input.toLowerCase().split("");
    const translatedArray = inputArray.map((character) => {
      if (!alphabet.includes(character)) return character; // return non-alphabetical characters (e.g. spaces, periods)
      let shiftedIndex = alphabet.indexOf(character) + shift; // add shift to letter index
      if (encode === false) {
        shiftedIndex = alphabet.indexOf(character) - shift; //decoding
      }
      return _translateIndexToLetter(shiftedIndex);
    });
    return translatedArray.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
