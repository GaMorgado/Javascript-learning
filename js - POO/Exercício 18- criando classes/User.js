class User{
  constructor(fullname, email, password){
    this.fullname = fullname
    this.email = email
    this.password = password
  }
  login(email, password) {
    if (email === this.email && password === this.password){
      console.log('Login efetuado')
    }else{
      console.log('Erro ao fazer login, senha ou email inválidos')
    }
  }
}

const morgs = new User("Gabs Morgs", "gabs.morgs@gmail.com", "Morgs014")

morgs.login("gabs.morgs@gmail.com", "Morgs014")