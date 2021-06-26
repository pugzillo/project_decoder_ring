// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    if (!input.replace(/\s+/g, "").length % 2 === 0 && !encode) return false; // when number of characters, excluding spaces, is not even

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

    const inputArray = input.toLowerCase().split("");
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    const translatedArray = inputArray.map((char) => {
      if (!alphabet.includes(char)) return char; // return non-alphabetic characters
      let result;
      square.forEach((row, rowIdx) => {
        row.forEach((col, colIdx) => {
          if (col.find((letter) => letter === char)) {
            result = `${colIdx + 1}${rowIdx + 1}`;
            // when decoding, 42 represents both i and j
            if (result === "42" && !encode) {
              result = "(i/j)";
            }
          }
        });
      });
      return result;
    });

    return translatedArray.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

console.log(polybiusModule.polybius("thinkful"));
