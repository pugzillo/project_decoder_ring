const substitutionModule = require("../src/substitution");
const substitution = substitutionModule.substitution; 
const expect = require("chai").expect;

describe("Error handling", () => {
    it("returns false when the alphabet parameter is not provided", () => {
        const expected = false;
        const actual = substitution("thinkful");
        expect(actual).to.equal(expected);
    })
     
    it("returns a false when the alphabet parameter is below 26 characters", () => {
        const expected = false; 
        const actual = substitution("thinkful", "short");
        expect(actual).to.equal(expected);
    });

    it("returns a false when the alphabet parameter is above 26 characters", () => {
        const expected = false; 
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); 
        expect(actual).to.equal(expected);
    });

    it("returns a false when the alphabet parameter includes redundant characters", () => {
        const expected = false; 
        const actual = substitution("thinkful", "$$$e&zrdxtfcygvuhbijnokmpl"); 
        expect(actual).to.equal(expected);
    });
})

describe("Encoding a message", () => {
    it("returns a encoding string when input does not include spaces", () => {
        const expected = 'jrufscpw';
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected); 
    });

    it("returns a encoding string when input includes spaces", () => {
        const expected = 'elp xhm xf mbymwwmfj dne';
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected); 
    });

    it("returns a encoding string when input includes special characters", () => {
        const expected = "y&ii$r&";
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal(expected); 
    });    
})

describe("Decoded a message", () => {
    it("returns a decoded message when input does not include spaces", () => {
        const expected = 'thinkful';
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected); 
    });

    it("returns a decoded message when the input has spaces", () => {
        const expected = 'thinkful thinkful';
        const actual = substitution("jrufscpw jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    })

    it("returns a decoded message when input includes special characters", () => {
        const expected = "message"
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected); 
    });
})