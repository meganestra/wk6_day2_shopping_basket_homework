var basket = require('../basket');
var shopping = require('../shopping');
var customers = require('../customer');
var assert = require('chai').assert;

describe('Customer', function(){

  it('should have a valid discount card', function(){
    assert.equal(true, customers.ashleigh.discountCardValid);
  })

})
