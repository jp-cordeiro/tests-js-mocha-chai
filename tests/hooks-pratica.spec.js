var expect = require('chai').expect;

describe('Main', function () {
    //roda uma vez antes do bloco
    before(function () {
        var arr;
    });

    //roda uma vez depois do bloco
    after(function () {
    });

    //roda todos as vezes antes de cada bloco
    beforeEach(function () {
        arr = [1,2,3];
    });

    //roda todas as vezes depois de cada bloco
    afterEach(function () {
    });

    it('should be array', function () {
       expect(arr).to.be.a('array');
    });

    it('should return when pop from the array', function () {
        expect(arr.pop() === 3).to.be.true;
    });

    it('should have a size of 4 when push another value to the array', function () {
        arr.push(4);
        expect(arr).to.have.lengthOf(4);
    });

    it('should have a size of 2 when pop a value from the array', function () {
        arr.pop();
        expect(arr).to.not.include(3);
    });

    it('should remove the value 3 when use pop in the array', function () {
        arr.pop();
        expect(arr).to.have.lengthOf(2);
    });
});
