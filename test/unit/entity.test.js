/**
 * @fileOverview Testing the Entity interface.
 */

// var sinon  = require('sinon');
var chai = require('chai');
// var sinon = require('sinon');
var assert = chai.assert;

var entity = require('../../');


// var noop = function(){};

setup(function() {});
teardown(function() {});


// The numbering (e.g. 1.1.1) has nothing to do with order
// The purpose is to provide a unique string so specific tests are
// run by using the mocha --grep "1.1.1" option.

suite('1.1 API Surface', function() {
  test('1.1.1 Core Methods', function() {
    assert.isFunction(entity.constructor, 'Entity should have an "constructor"');
    assert.isFunction(entity.prototype, 'Entity should have a "prototype"');
    assert.isFunction(entity.extend, 'Entity should have an "extend" static method');
    assert.isFunction(entity.extend, 'Entity should have an "extend" static method');
    assert.isFunction(entity.method, 'Entity should have a "method" static method');
    assert.isFunction(entity.getSchema, 'Entity should have a "getSchema" static method');
    assert.isFunction(entity.addSchema, 'Entity should have a "addSchema" static method');
    assert.isFunction(entity.remSchema, 'Entity should have a "remSchema" static method');
  });
});
