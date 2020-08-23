const { expect } = require('chai');

// Models
const { Product, CarInsurance } = require('../src/models');

// Data
const { products, results, resultsWithSuperDegrade } = require('../src/data');

// Array of days
const days = Array.apply(null, { length: 31 }).map(Number.call, Number);

describe('Fixed test', function () {
  it('should foo', function () {
    const testProducts = [ new Product("foo", 0, 0) ];
    const carInsurance = new CarInsurance(testProducts);
    const productsUpdated = carInsurance.updateDataFromDay();
    expect(productsUpdated[0].name).equal("foo");
  });
});

describe('After 30 Days', function () {
  // TODO: Problems to work this 2 it in same time
  /*it('compare without super degrade', function () {
    function compare (day, currentInsurance) {
      const expected = results
        .filter(current => current.day === day)
        .map(current => {
          const { name, price, sellIn } = current;
          return new Product(name, sellIn, price)
        });
      expect(currentInsurance).to.have.deep.members(expected);
    }

    days.forEach(day => {
      const insurance = new CarInsurance(products);
      compare(day, insurance.updateDataFromDay(day));
    });
  });*/

  it('compare with super degrade', function () {
    function compare (day, currentInsurance) {
      const expected = resultsWithSuperDegrade
        .filter(current => current.day === day)
        .map(current => {
          const { name, price, sellIn } = current;
          return new Product(name, sellIn, price)
        });
      expect(currentInsurance).to.have.deep.members(expected);
    }

    days.forEach(day => {
      const insurance = new CarInsurance(products);
      compare(day, insurance.updateDataFromDay(day, true));
    });
  });
});
