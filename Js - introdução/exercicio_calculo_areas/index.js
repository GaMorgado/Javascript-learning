function area_Triangulo() {
  alert("Fórmula do triangulo: (base * altura) / 2")
  const base = prompt("digite a base")
  const altura = prompt("digite a altura")
  return base * altura / 2
}
function area_Retangulo() {
  alert("Fórmula do Retângulo: base * altura")
  const base = prompt("digite a base")
  const altura = prompt("digite a altura")
  return base * altura
}
function area_Quadrado() {
  alert(" Fórmula do Quadrado: lado²")
  const lado = prompt("Digite o lado")
  return lado * lado
}
function area_Trapezio() {
  alert(" Fórmula do Trapézio: (base maior + base menor) * altura / 2")
  const baseMaior = parseFloat(prompt("digite a base maior"))
  const baseMenor = parseFloat(prompt("digite a base menor"))
  const altura = prompt("digite a altura")
  return (baseMaior + baseMenor) * altura / 2
}
function area_circulo() {
  alert("Fórmula do Círculo: Pi(3.14) * raio² ")
  const raio = prompt("digite o raio")
  return 3.14 * (raio * raio  )
}
function menu(){
  return prompt("Bem vindo a calculadora geométrica" + "\nO que deseja?" + "\n1)Calcular area de Triangulo" + "\n2)Calcular area de Retângulo" + "\n3)Calcular area de Quadrado" + "\n4)Calcular area de Trapézio" + "\n5)Calcular area de Círculo" + "\n6)Sair")
}
let option 

function executar(){
  do{
    let resultado
    option = menu()
    switch(option){
      case "1":
        resultado = area_Triangulo()
        break
      case "2":
        resultado = area_Retangulo()
        break
      case "3":
        resultado = area_Quadrado()
        break
      case "4":
        resultado = area_Trapezio()
        break
      case "5":
        resultado = area_circulo()
        break
      case "6":
        alert("finalizando...")
        break
      default:
        alert("Opção inválida")
    }

    if(resultado){
      alert("Resultado: " + resultado)
    }

  }while(option !== "6")
}

executar()