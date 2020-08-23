const { expect } = require('chai');

// Models
const { Product, CarInsurance } = require('../src/models');

// Data
const { products, results } = require('../src/data');

describe('Fixed test', function () {
  it('should foo', function () {
    const testProducts = [ new Product("foo", 0, 0) ];
    const carInsurance = new CarInsurance(testProducts);
    const productsUpdated = carInsurance.updatePrice();

    expect(productsUpdated[0].name).equal("foo");
  });
});

describe('After 30 Days', function () {
  it('compare with saved results', function () {

    const compare = function (day, currentInsurance) {
      const expected = results
        .filter(current => current.day === day)
        .map(current => {
          const { name, price, sellIn } = current;
          return new Product(name, sellIn, price)
        });
      expect(currentInsurance).to.have.deep.members(expected);
    }

    for (let day = 0; day <= 30; day += 1) {
      const insurance = new CarInsurance(products);
      compare(day, insurance.updatePrice(day));
    }
  });
});
