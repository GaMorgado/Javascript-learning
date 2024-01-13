const Product = require("./Product");

module.exports = class Poster extends Product{
  constructor(name, width, height, description, price, inStock = 0){
    super(name, description, price, inStock)
    this.width = width
    this.height = height
  }
}