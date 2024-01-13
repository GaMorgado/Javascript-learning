const input = document.getElementById("input")

document.getElementById("value").addEventListener("click", function(){
  input.value = input.value === "" ? "Olá, Mundo" : ""
  console.log(input.getAttribute("value"))
  console.log(input.value)
})

document.getElementById("type").addEventListener("click", function(){
  input.type = input.type !== "radio" ? "radio" : "text"  
  //input.setAttribute("type", "radio")
})

document.getElementById("placeholder").addEventListener("click", function(){
  input.placeholder = "digite algo..."
})

document.getElementById("disable").addEventListener("click", function(){
input.disabled = input.disabled !== input.disabled ? input.disabled : !input.disabled
})

document.getElementById("data").addEventListener("click", function(){
  const data = input.dataset.something
  console.log("o valor de data-something é: " + data)
  input.dataset.something = "algum outro valor"
  console.log("o valor de data-something agora é: " + input.dataset.something)
})