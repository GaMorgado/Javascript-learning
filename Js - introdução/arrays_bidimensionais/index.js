const arr = [
  "1º Nível",
  ["2º nível", 42, true],
  [
    ["3º nível, 1º item", "Olá, mundo!"],
    ["3º nível, 2º item", "Oi, mundo!"],
  ],
  []
]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[1][0])
console.log(arr[1][1])

const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]
//console.table(matriz)

//matriz.push(["NOVA LINHA"])
//matriz[0].push("NOVA COLUNA")

//console.table(matriz)

for(let i = 0; i < matriz.length; i++){
  for(let j = 0; j < matriz[i].length; j++){
    const elemento = matriz[i][j]
    console.log("POSIÇÃO: (" + i + ", " + j + ") valor: " + elemento)
  }
}