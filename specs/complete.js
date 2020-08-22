const { expect } = require('chai');

// Models
const { Product, CarInsurance } = require('../src/models');

describe('Complete', () => {
  it("should foo", function() {
    const products = [ new Product("foo", 0, 0) ];
    const carInsurance = new CarInsurance(products);
    const productsUpdated = carInsurance.updatePrice();
    expect(productsUpdated[0].name).equal("foo");
  });
});
