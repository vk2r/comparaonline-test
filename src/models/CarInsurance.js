class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice(currentDay = 0) {
    if (currentDay === 0) return this.products;
    for (let i = 0; i < this.products.length; i++) {
      if (!['Full Coverage', 'Special Full Coverage'].includes(this.products[i].name)) {
        if (this.products[i].price > 0 && this.products[i].name !== 'Mega Coverage') {
          this.products[i].price = this.products[i].price - 1;
        }
      } else {
        if (this.products[i].price < 50) {
          this.products[i].price = this.products[i].price + 1;
          if (this.products[i].name === 'Special Full Coverage') {
            if (this.products[i].sellIn < 11 && this.products[i].price < 50) {
              this.products[i].price = this.products[i].price + 1;
            }
            if (this.products[i].sellIn < 6 && this.products[i].price < 50) {
              this.products[i].price = this.products[i].price + 1;
            }
          }
        }
      }
      if (this.products[i].name !== 'Mega Coverage') this.products[i].sellIn = this.products[i].sellIn - 1;
      if (this.products[i].sellIn < 0) {
        if (this.products[i].name !== 'Full Coverage') {
          if (this.products[i].name !== 'Special Full Coverage') {
            if (this.products[i].price > 0 && this.products[i].name !== 'Mega Coverage') {
              this.products[i].price = this.products[i].price - 1;
            }
          } else {
            this.products[i].price = this.products[i].price - this.products[i].price;
          }
        } else if (this.products[i].price < 50) {
           this.products[i].price = this.products[i].price + 1;
        }
      }
    }
    return this.products;
  }
}

module.exports = CarInsurance;
