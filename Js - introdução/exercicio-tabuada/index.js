const num = parseFloat(prompt("Digite o número desejado para calcular a tabuada: "))
let tab = ""

for(let i = 0; i <= 20; i++){
  tab += num + "x" + i + "=" +(num*i) + "\n"
}

alert(tab)