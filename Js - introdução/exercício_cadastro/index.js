let name = prompt("Qual seu primeiro nome?")
let last_name = prompt("Qual seu sobrenome?")
let study = prompt("Qual seu campo de estudo?")
let year = parseFloat(prompt("Em qual ano você nasceu?"))
let idade =  2023 - year

alert("Parabéns recruta, cadastrado! \n" + "\nSeu nome é " + name + "\nseu sobrenome é "  + last_name + "\nvocê estuda " + study + "\nvocê tem: " + idade)

console.log(name)
console.log(last_name)
console.log(study)
console.log(idade)
