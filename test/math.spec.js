const assert = require('assert');
const Math = require('../src/math.js')
const expect = require('chai').expect;
const sinon = require('sinon');

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

    it.only('Calls req with sum and index values', function(){
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.calledOnce).to.be.true;        
    })
});