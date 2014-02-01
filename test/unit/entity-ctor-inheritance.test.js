/**
 * @fileOverview Testing the Entity interface.
 */

// var sinon  = require('sinon');
var chai = require('chai');
// var sinon = require('sinon');
var assert = chai.assert;

// var noop = function(){};

var entity = require('../../');

setup(function() {});
teardown(function() {});


// The numbering (e.g. 1.1.1) has nothing to do with order
// The purpose is to provide a unique string so specific tests are
// run by using the mocha --grep "1.1.1" option.

suite('2.0 constructor and inheritance', function() {
  test('2.0.1 Extending with a constructor', function(done) {
    entity.extend(function() {
      done();
    });
  });
  test('2.0.1.1 Can extend without a ctor', function(){
    assert.doesNotThrow(entity.extend);
  });
  test('2.0.2 extend() returns a singleton instance with a ctor that is instanceof', function() {
    var entityChild = entity.extend();
    assert.instanceOf(entityChild, entity.constructor);
  });
});

test('2.0.3 extend() singleton has a reference to the ctor prototype', function() {
  var entityOne = entity.extend();
  assert.property(entityOne, 'prototype');
  assert.deepStrictEqual(entityOne.prototype, entityOne.constructor.prototype);
});

test('2.0.4 using instance prototype methods are immediately available', function() {
  var entityOne = entity.extend();
  entityOne.prototype.add = function(a, b) { return a + b; };

  assert.isFunction(entityOne.add);
  assert.equal(2, entityOne.add(1,1));
});

test('2.0.5 using instance prototype methods are inherited', function() {
  var entityOne = entity.extend();
  entityOne.prototype.add = function(a, b) { return a + b; };

  var entityTwo = entityOne.extend();
  assert.isFunction(entityTwo.add);
  assert.equal(2, entityTwo.add(1,1));
});
