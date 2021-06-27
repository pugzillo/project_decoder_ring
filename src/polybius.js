// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  // Polybius Square
  let square = [
    "abcde".split(""),
    "fghijk".split(""),
    "lmnop".split(""),
    "qrstu".split(""),
    "vwxyz".split(""),
  ];
  square = square.map((row) =>
    row[0] === "f"
      ? [["f"], ["g"], ["h"], ["i", "j"], ["k"]] // both i and j can be converted to 42
      : row.map((letter) => [letter])
  );

  function decode(input) {
    const column = input[0] - 1; // plus one to account for zero start index
    const row = input[1] - 1;
    if (square[row][column][0] === "i") {
      return "(i/j)"; // 42 represents both i and j
    } else {
      return square[row][column][0];
    }
  }

  function polybius(input, encode = true) {
    if (input.replace(/\s+/g, "").length % 2 !== 0 && encode === false)
      return false; // when number of characters, excluding spaces, is not even

    const inputArray = input.toLowerCase().split("");
    let translatedArray = [];

    if (encode) {
      translatedArray = inputArray.map((char) => {
        if (!alphabet.includes(char)) return char; // return non-alphabetic characters
        let result;
        square.forEach((row, rowIdx) => {
          row.forEach((col, colIdx) => {
            if (col.find((letter) => letter === char)) {
              result = `${colIdx + 1}${rowIdx + 1}`;
            }
          });
        });
        return result;
      });

      return translatedArray.join("");
    } else {
      const inputArrayBySpace = input.split(" ");
      inputArrayBySpace.forEach((set) => {
        let word = [];
        for (let i = 0; i < set.length; i += 2) {
          word.push(decode(set[i] + set[i + 1]));
        }
        translatedArray.push(word.join(""));
      });
      return translatedArray.join(" ");
    }
  }

  return {
    polybius,
    decode,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

console.log(polybiusModule.polybius("3251131343 2543241341", false));
