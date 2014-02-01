/*jshint unused:false */

/**
 * @fileOverview The primitive CRUD operations.
 *
 */

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var midd = require('middlewarify');

var Entity = require('./entity');

/**
 * The CRUD Entity Class.
 *
 * @constructor
 * @extends {Entity}
 */
var entityCrud = module.exports = Entity.extend(function() {
  /** @type {?Object} The current user or null for anonymous */
  this.udo = null;

  /** @type {string} The default 'id' field name */
  this._idName = 'id';
  // Create primitive middlewares
  midd.make(this, 'create', this._create.bind(this), {beforeAfter: true});
  midd.make(this, 'read', this._read.bind(this), {beforeAfter: true});
  midd.make(this, 'readOne', this._readOne.bind(this), {beforeAfter: true});
  midd.make(this, 'readLimit', this._readLimit.bind(this), {beforeAfter: true});
  midd.make(this, 'update', this._update.bind(this), {beforeAfter: true});
  midd.make(this, 'delete', this._delete.bind(this), {beforeAfter: true});
  midd.make(this, 'count', this._count.bind(this), {beforeAfter: true});
});

/**
 * Set the current user data object
 * @param {Object} udo A User Data Object.
 */
entityCrud.prototype.setUdo = function(udo) {
  this.udo = udo;
};

/**
 * Create an entity item.
 *
 * @param {Object} itemData The data to use for creating.
 * @param {Function(Error=, Object=)} done callback.
 * @protected
 */
entityCrud.prototype._create = function(itemData, done) {
  throw new Error('Not Implemented');
};

/**
 * Read one entity item.
 *
 * @param {string|Object} id the item id or an Object to query against.
 * @param {Function(Error=, Object=)} done callback.
 * @protected
 */
entityCrud.prototype._readOne = function(id, done) {
  throw new Error('Not Implemented');
};

/**
 * Read items based on query or if not defined, read all items.
 * Do practice common sense!
 *
 * @param {Object|string=} optQuery Optionally define a query to limit results.
 * @param {Function(Error=, Object=)} done callback.
 * @protected
 */
entityCrud.prototype._read = function(optQuery, done) {
  throw new Error('Not Implemented');
};

/**
 * Read a limited set of items.
 *
 * @param {?Object} query Narrow down the set, set to null for all.
 * @param {number} skip starting position.
 * @param {number} limit how many records to fetch.
 * @param {Function(Error=, Array.<Object>=)} done callback.
 * @protected
 */
entityCrud.prototype._readLimit = function(query, skip, limit, done) {
  throw new Error('Not Implemented');
};

/**
 * Get the count of items.
 *
 * @param {?Object} query Narrow down the set, set to null for all.
 * @param {Function(Error=, number=)} done callback.
 * @protected
 */
entityCrud.prototype._count = function(query, done) {
  throw new Error('Not Implemented');
};

/**
 * Update an entity item.
 *
 * @param {string} id the item id.
 * @param {Object} itemData The data to use for creating.
 * @param {Function(Error=, Object=)} done callback.
 * @protected
 */
entityCrud.prototype._update = function(id, itemData, done) {
  throw new Error('Not Implemented');
};

/**
 * Remove an entity item.
 *
 * @param {string} id the item id.
 * @param {Function(Error=, Object=)} done callback.
 * @protected
 */
entityCrud.prototype._delete = function(id, done) {
  throw new Error('Not Implemented');
};

