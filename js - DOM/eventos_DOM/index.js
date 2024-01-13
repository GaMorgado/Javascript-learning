function register(ev){
  console.log(ev)

  const sectionElement = ev.currentTarget.parentNode
  const username = sectionElement.children.username.value
  const password = sectionElement.children.password.value
  const confirmPassword = sectionElement.children.confirmPassword.value

  if(password === confirmPassword){
    alert("o usuário " + username + " foi cadastrado com sucesso")
  }else{
    alert("erro")
  }
}

const button = document.getElementById("register-button")

button.addEventListener("click", register)

function removeListener(){
  button.removeEventListener("click", register)
  alert('evento removido')
}

button.addEventListener("mouseover", function(ev){
  console.log(ev.currentTarget)
})