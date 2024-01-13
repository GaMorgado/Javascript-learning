class Product{
  constructor(name, description, price){
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }
  addToStock(qtd){
    this.inStock += qtd
  }
  calculateDiscount(discount){
    this.price = this.price - (this.price * (discount/100))
    console.log(`O novo preço é ${this.price} reais`)
    return this.price
  }
}


const ball = new Product('bola', 'bola de fut', 30)

ball.addToStock(1)

console.log(ball)

ball.calculateDiscount(20)
