class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

const type = {
  low: 'Low Coverage',
  medium: 'Medium Coverage',
  full: 'Full Coverage',
  super: 'Super Sale',
  special: 'Special Full Coverage',
  mega: 'Mega Coverage'
};

module.exports = {
  Product,
  type
};
