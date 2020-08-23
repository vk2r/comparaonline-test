const { type } = require('../models/Product');
const blacklist = [type.mega];

class CarInsurance {
  constructor (products = []) {
    this.products = products;
    this.product = {
      name: '',
      sellIn: 0,
      price: 0
    };
  }
  reducePrice (reduce = 0) {
    this.product.price = this.product.price - reduce;
  }
  addPrice (add = 0) {
    this.product.price = this.product.price + add;
  }
  reduceSellIn (reduce = 0) {
    this.product.sellIn = this.product.sellIn - reduce;
  }
  inBlackList () {
    return blacklist.includes(this.product.name);
  }
  updateDataFromDay (currentDay = 0, superDegrade = false) {
    if (currentDay === 0) return this.products;
    for (let i = 0; i < this.products.length; i++) {
      this.product = this.products[i];
      const { name } = this.product;

      // Update prices
      if (![type.full, type.special].includes(this.product.name)) {
        // Includes Low, Medium, Mega, Super coverages
        if (!this.inBlackList() && this.product.price > 0) {
          this.reducePrice(1);
          if (this.product.name === type.super && superDegrade) {
            this.reducePrice(1);
          }
        }
      } else {
        // Includes Full, Special coverages
        if (this.product.price < 50) {
          this.addPrice(1);
          if (this.product.name === 'Special Full Coverage') {
            if (this.product.sellIn < 11 && this.product.price < 50) {
              this.addPrice(1);
            }
            if (this.product.sellIn < 6 && this.product.price < 50) {
              this.addPrice(1);
            }
          }
        }
      }

      // Update sell-in
      if (!this.inBlackList()) {
        this.reduceSellIn(1);
      }

      if (this.product.sellIn < 0) {
        if (this.product.name !== 'Full Coverage') {
          if (this.product.name !== 'Special Full Coverage') {
            if (this.product.price > 0 && !this.inBlackList()) {
              this.reducePrice(1);
              if (this.product.name === type.super && superDegrade) {
                this.reducePrice(1);
              }
            }
          } else {
            this.product.price = 0;
          }
        } else if (this.product.price < 50) {
          this.addPrice(1);
        }
      }
    }
    return this.products;
  }
}

module.exports = {
  CarInsurance
};
