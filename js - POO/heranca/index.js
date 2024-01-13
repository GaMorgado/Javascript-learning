class Property {
  constructor(area, price){
    this.area = area
    this.price = price
  }
  getPricePerSquareMeter(){
    return this.price / this.area
  }
}

class house extends Property{
}

const land = new Property(200, 50000)
const SomeHouse = new house(120, 20000)

console.log(land)
console.log(Math.ceil(SomeHouse.getPricePerSquareMeter()))