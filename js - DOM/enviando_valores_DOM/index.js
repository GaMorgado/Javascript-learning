function register(element){
  const username = element.children.username.value
  const password = element.children.password.value
  const confirmPassword = element.children.confirmPassword.value

  if(password === confirmPassword){
    alert('Usuário ' + username + " registrado com sucesso")
  }else{
    alert("As senhas não conferem")
  }

  document.getElementById("username").value = ""
  document.getElementById("password").value = ""
  document.getElementById("confirmPassword").value = ""
}