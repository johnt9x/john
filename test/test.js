// test/test.js

const assert = require('assert');

// Chương trình đơn giản cần được kiểm thử
function add(a, b) {
  return a + b;
}

// Bài kiểm thử
describe('Math', function() {
  describe('add()', function() {
    it('should return the sum of two numbers', function() {
      assert.equal(add(1, 2), 3);
    });

    it('should return NaN if one of the arguments is not a number', function() {
      assert.ok(isNaN(add(1, 'a')));
    });
  });
});
