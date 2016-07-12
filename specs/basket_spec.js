var basket = require('../basket');
var shopping = require('../shopping');
var customers = require('../customer');
var assert = require('chai').assert;

describe('Basket', function(){

  it('should start with a value of 0', function(){
    assert.equal(0, basket.value);
  })

  it('should start as an empty basket', function(){
    assert.equal(0, basket.numberOfItems());
  })

  it('should increase number of items by 1 and increase basket value by 3 when item added', function(){
    basket.addItems(shopping);
    assert.equal(4, basket.numberOfItems());
    assert.equal(25.29, basket.value);
  })

  it('should set value and items to 0 when all items are removed', function(){
    basket.addItems(shopping);
    basket.removeAllItems();
    assert.equal(0, basket.numberOfItems());
    assert.equal(0, basket.value);
  })

  it('should decrease number of items by 1 and decrease value by 3 when item removed', function(){
    basket.addItems(shopping);
    basket.removeItem(shopping.milk);
    assert.equal(3, basket.numberOfItems());
    assert.equal(24.49, basket.value);
  })

  it('should reduce the basket value by 10% if the total value is over 20', function(){
    basket.removeAllItems();
    basket.addItems(shopping);
    basket.discount(customers.megan);
    assert.equal(22.76, basket.value);
  })

  it('should reduce the basket value by 15% if the total value id over 20 and the customer has a valid discount card', function(){
    basket.removeAllItems();
    basket.addItems(shopping);
    basket.discount(customers.ashleigh);
  })

  // it('should have the ability to buy one get one free item', function(){
    
  // })

})










