/**
 * @fileOverview Testing the Entity events.
 */

var EventEmitter = require('events').EventEmitter;

// var sinon  = require('sinon');
var chai = require('chai');
// var sinon = require('sinon');
var assert = chai.assert;

// var noop = function(){};

/**
 * Surface test the entity API.
 *
 * @param {Object} driver The driver object as defined in core.test.js
 */
module.exports = function(driver) {
  var majNum = driver.majNum;
  setup(function() {});
  teardown(function() {});


  // The numbering (e.g. 1.1.1) has nothing to do with order
  // The purpose is to provide a unique string so specific tests are
  // run by using the mocha --grep "1.1.1" option.

  suite(majNum + '.10 Events', function() {
    test(majNum + '.10.1 Entity is an instance of "events.EventEmitter"', function() {
      assert.instanceOf(driver.entity(), EventEmitter);
    });
  });
};