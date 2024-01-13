class Veiculo{
  move(){
    console.log('o veiculo está move move')
  }
}

class Car extends Veiculo{
  move(){
    console.log("o carro está dirigindo")
  }
}

class ship extends Veiculo{
  move(){
    console.log('O barco está navegando')
  }
}

class airplane extends Veiculo{
  move(){
    console.log('O aviao está voando')
  }
}

const deloriano = new Car()

const HolandesVoador = new ship()

const cacaSoivetico = new airplane()

deloriano.move()
HolandesVoador.move()
cacaSoivetico.move()