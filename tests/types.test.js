const chai = require('chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;

describe('Cases from app.js', () => {
  // this is a testing suite made up of suites.

  describe('apples', () => {
    it('should be an array', () => {
      const apples = cases.apples;
      // assert.equal(Array.isArray(apples), false);
      expect(apples).to.be.an('array'); // Begin here something is wrong, fix it.
    });
    // write a test to check the correct length of the apples array.
    it('should have a length of 4', () => {
      const apples = cases.apples;
      assert.equal(apples.length, 4);
    });
    // write a test to check to see if the apples array contains 'Red Delicious'.
    it('should find red delicious in the array', () => {
    const apples = cases.apples;
    assert.equal(apples.includes('Red Delicious'), true);
    });
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
    it('favorite band should be Beastie Boys', () => {
      const Ben = cases.Ben;
      assert.equal(Ben.favBand, 'Beastie Boys');
    });
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    it('Sean\'s favorite food should be Pizza', () => {
      const Sean = cases.Sean;
      assert.equal(Sean.favFood, 'Pizza');
    });
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it('Ryan\s favorite book should not be Harry Potter', () => {
      const Ryan = cases.Ryan;
      assert.equal(Ryan.favBook.includes('Harry Potter'), false);
    });
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
    it('Austen\'s favorite color should not be Gold', () => {
      const Austen = cases.Austen;
      expect(Austen.favColor).to.not.equal('Gold');
    });
  });

  describe('Ivan', () => {
    it('should be an object', () => {
      const Ivan = cases.Ivan;
      expect(Ivan).to.be.an('object');
    });
    // write a test to check if Ivan's favActivity is 'Rock Climbing'.
    it('Ivan\'s favorite activity should be Rock Climbing', () => {
      const Ivan = cases.Ivan;
      assert.equal(Ivan.favActivity, 'Rock Climbing');
    });
  });
});
