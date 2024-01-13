const render = require("./render.js")
const store = require("./store")

console.log(`Aplicação iniciada.`)
render()
store()
console.log(`Aplicação finalizada.`)

//utilizado em node.js como forma padrão de exportação de modulos