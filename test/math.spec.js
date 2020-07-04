const assert = require('assert');
const Math = require('../src/math.js')
const expect = require('chai').expect;

let value = 0;

describe('Math class', function(){
    beforeEach(function() {
        value = 0;
    });

    it('Sum two numbers', function(){
        const math = new Math();

        expect(math.sum(5,5)).to.equal(10);
    });

    it('Multiply two numbers');
});