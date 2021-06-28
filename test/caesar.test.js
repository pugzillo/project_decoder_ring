// Write your tests here!
const caesarModule = require("../src/caesar");
const expect = require("chai").expect;
const caesar = caesarModule.caesar;

describe("Decoding", () => {
  it("should return an encoded string with a positive shift", () => {
    const expected = "wklqnixo";
    const actual = caesar("thinkful", 3);
    expect(actual).to.equal(expected);
  });

  it("should return an encoded string with a negative shift", () => {
    const expected = "qefkhcri";
    const actual = caesar("thinkful", -3);
    expect(actual).to.equal(expected);
  });

  it("should return an encoded string with spaces", () => {
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesar("This is a secret message!", 8);
    expect(actual).to.equal(expected);
  });
});

describe("Encoding", () => {
  it("should return a decoded string when encode is set to false", () => {
    const expected = "thinkful";
    const actual = caesar("wklqnixo", 3, false);
    expect(actual).to.equal(expected);
  });

  it("should return an decoded string with spaces", () => {
    const expected = "this is a secret message!";
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.equal(expected);
  });
});

describe("Caesar: Error Handling", () => {
  it("should return false if shift is not entered", () => {
    const expected = false;
    const actual = caesar("thinkful");
    expect(actual).to.equal(expected);
  });

  it("should return false if shift is greater than 25", () => {
    const expected = false;
    const actual = caesar("thinkful", 99);
    expect(actual).to.equal(expected);
  });

  it("should return false if shift is less than -25", () => {
    const expected = false;
    const actual = caesar("thinkful", -26);
    expect(actual).to.equal(expected);
  });
});
