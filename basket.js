var basket = {
  value: 0,
  items: [],
  numberOfItems: function(){
    return this.items.length;
  },
  addItems: function(shopping){
    for (var key in shopping){
      this.items.push(shopping[key]);
      this.value += shopping[key].price;
    }
  },
  removeAllItems: function(){
    this.items.splice(0, this.numberOfItems());
    this.value = 0;
  },
  removeItem: function(item){
    this.items.pop(item);
    this.value -= item.price;
  },
  discount: function(customer){
    if((customer.discountCardValid === true) && (this.value > 20)){
      this.value = (this.value * 0.85).toFixed(2);
    }else{ (this.value > 20) 
      this.value = (this.value * 0.9).toFixed(2);
    }
  }
}

module.exports = basket;
