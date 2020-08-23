// Data
const { products } = require('../src/data');

// Models
const { CarInsurance } = require('../src/models');

describe('After 30 Days', function () {
  it('print results', function () {

    const print = function (day, insurance) {
      if (day === 0) console.log('OMGHAI!');
      console.log(`-------- day ${day} --------`);
      console.log('name, sellIn, price');
      insurance.forEach(product => {
        console.log(`${product.name}, ${product.sellIn}, ${product.price}`)
      });
      console.log('');
    };

    for (let day = 0; day <= 30; day += 1) {
      const insurance = new CarInsurance(products);
      print(day, insurance.updatePrice(day));
    }
  });
});
