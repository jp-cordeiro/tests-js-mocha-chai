var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Main', function () {

    //smoke test
    describe('Smoke tests', function () {
        it('should exist the calc lib', function () {
            expect(calc).to.exist;
        });

        it('should exist mothod sum', function () {
            expect(calc.sum).to.exist;
            expect(calc.sum).to.be.a('function');
        });

        it('should exist mothod sub', function () {
            expect(calc.sub).to.exist;
            expect(calc.sub).to.be.a('function');
        });

        it('should exist mothod div', function () {
            expect(calc.div).to.exist;
            expect(calc.div).to.be.a('function');
        });

        it('should exist mothod mult', function () {
            expect(calc.mult).to.exist;
            expect(calc.mult).to.be.a('function');
        });
    });

})
