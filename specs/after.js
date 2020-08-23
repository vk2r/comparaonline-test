// Data
const { products } = require('../src/data');

// Models
const { CarInsurance } = require('../src/models');

// Array of days
const days = Array.apply(null, { length: 31 }).map(Number.call, Number);

describe('After 30 Days', function () {

  function print (day, insurance) {
    if (day === 0) console.log('OMGHAI!');
    console.log(`-------- day ${day} --------`);
    console.log('name, sellIn, price');
    insurance.forEach(product => {
      console.log(`${product.name}, ${product.sellIn}, ${product.price}`)
    });
    console.log('');
  }

  it('print results without super degrade', function () {
    days.forEach(day => {
      const insurance = new CarInsurance(products);
      print(day, insurance.updateDataFromDay(day));
    });
  });

  it('print results with super degrade', function () {
    days.forEach(day => {
      const insurance = new CarInsurance(products);
      print(day, insurance.updateDataFromDay(day, true));
    });
  });
});
