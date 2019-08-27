var expect = require('chai').expect;
import fizzBuzz from '../src/main';

describe('Main', function () {
    it('should return `fizz` when multiple of 3', function () {
        expect(fizzBuzz(3)).to.be.equal('fizz');
    });

    it('should return `buzz` when multiple of 3', function () {
        expect(fizzBuzz(5)).to.be.equal('buzz');
    });

    it('should return `fizzBuzz` when multiple of 3 and 5', function () {
        expect(fizzBuzz(15)).to.be.equal('fizzBuzz');
    });
})
