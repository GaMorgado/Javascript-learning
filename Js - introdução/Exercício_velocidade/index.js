const name_car = prompt("digite o nome do seu carro")
const speed01 = parseFloat(prompt("qual a velocidade do seu carro?"))
const name_car2 = prompt("digite o nome do carro do adversário")
const speed02 = parseFloat(prompt("qual a velocidade do carro do oponente?"))

if (speed01 > speed02) {
  alert(name_car + " é mais rápido")
} else if(speed01 < speed02){
  alert(name_car2 + " é mais rápido")
} else if(speed01 === speed02){
  alert("Ambos os carros tem a mesma velocidade")
}

