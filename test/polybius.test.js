const polybiusModule = require("../src/polybius");
const polybius = polybiusModule.polybius;
const expect = require("chai").expect;

describe("Polybius: Error Handling", () => {
  it("returns false when the number of characters in the input, excluding spaces, is not even", () => {
    const expected = false;
    const actual = polybius("44324233521254134", false);
    expect(actual).to.equal(expected);
  });
})

describe("Polybius: Encoding", () => {
  it("returns an encoded string when a word with only letters is inputted", () => {
    const expected = "4432423352125413";
    const actual = polybius("thinkful");
    expect(actual).to.equal(expected);
  });

  it("returns an encoded string when a string including spaces is inputted", () => {
    const expected = "3251131343 2543241341";
    const actual = polybius("Hello world");
    expect(actual).to.equal(expected);
  });
})

describe("Polybius: Decoding a string", () => {
  it("returns a decoded string with a string with spaces is inputted", () => {
    const expected = "hello world";
    const actual = polybius("3251131343 2543241341", false);
    expect(actual).to.equal(expected);
  });

  it("returns a decoded string with a string that includes 42 which should be decoded and shown as letters i and j", () => {
    const expected = "th(i/j)nkful";
    const actual = polybius("4432423352125413", false);
    expect(actual).to.equal(expected);
  });
})
