module.exports = class Product{
  constructor(name, description, price, inStock = 0){
    this.name = name
    this.description = description
    this.price = price
    this.inStock = inStock
  }
  addInStock(qtd){
    return this.inStock += qtd
  }
  removeFromStock(qtd){
    return this.inStock -= qtd
  }
}