var shopping = require('../shopping');
var assert = require('chai').assert;

describe('Shopping', function(){

  it('an item in the shopping should have a name', function(){
    assert.equal("milk", shopping.milk.name);
  })

  it('an item should have a price', function(){
    assert.equal(0.80, shopping.milk.price);
  })

})