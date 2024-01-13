const form = document.getElementById("orderForm")

form.addEventListener("submit", function (ev) {
  ev.preventDefault()

  const name = document.querySelector('input[name="name"]').value
  const address = document.querySelector('input[name="address"]').value
  const breadType = document.querySelector("select[name='bread']").value
  const mix = document.querySelector("input[name='mix']").value
  const observation = document.querySelector("textarea[name='obs']").value

  let salad= ""
  document.querySelectorAll("input[name='salad']:checked").forEach(function(item){
    salad += " - " + item.value + "\n"
  })
  
  console.log({name, address, breadType, mix, observation, salad})

  alert(
    "Pedido Realizado!" +
    "\nNome do cliente: " + name +
    "\nEndereço do cliente: " + address +
    "\nTipo de Pão: " + breadType + 
    "\nRecheio: \n - " + mix + "\n" + salad +
    "Observações: " + observation 
    )

    document.querySelector('input[name="name"]').value = ""
    document.querySelector('input[name="address"]').value = ""
    document.querySelector("select[name='bread']").value = ""
    document.querySelector("input[name='mix']").value = ""
    document.querySelector("textarea[name='obs']").value = ""

})
