let c = require('chai')
let expect = c.expect


describe('Basic Mocha String Test', function () {

    it('should return number of characters in a string', function () {
        expect(("Hello".length)).to.equal(5);
    });
    it('should return first character of the string', function () {
        const firstChar = "Hello".charAt(0)
        expect(firstChar).to.equal('H')
    });
});

// run "yarn test" in console to run these tests.
