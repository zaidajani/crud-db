const assert = require('assert');
const db = require('./db');

describe('crud-db test suite', () => {
  describe('add and get', () => {
    it('should return the added value', () => {
      db.initialize();
      db.add('crud-db', 'is the most simplest db ever.');
      const returnValue = db.get('crud-db');
      assert.strictEqual(returnValue, 'is the most simplest db ever.');
    });
  });
  describe('vanish', () => {
    it('should remove the value', () => {
      db.initialize();
      db.add('crud-db-2', 'is the most simplest db ever.');
      db.vanish('crud-db-2');
      const returnValue = db.get('crud-db-2');
      assert.strictEqual(returnValue, undefined);
    });
  });
});
