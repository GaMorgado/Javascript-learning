function TrataEmail(email){
  if(!email.match(/\w{2,}@[a-zA-Z]{2,}\..{2}/)){
    const err = new Error('email inválido')
    err.input = 'email'
    throw err
  }
}

function TrataSenha(senha){
  if(
    !senha.match(/[a-z]/) ||
    !senha.match(/[A-Z]/) ||
    !senha.match(/\d/) ||
    !senha.match(/\W/) || //[^a-zA-Z\s0-9] inverte
    !senha.match(/.{8,}/)
  ) {
    const err = new Error(`Senha inválida`)
    err.input = 'senha'
    throw err
  }

}

const form = document.querySelector('form')
const errorArea = document.querySelector('h3')
const nome = document.getElementById('name')
const email = document.getElementById('email')
const senha = document.getElementById('senha')


form.addEventListener('submit', (ev)=>{
  ev.preventDefault()
  nome.classList.remove('success', 'erro')
  email.classList.remove('success', 'erro')
  senha.classList.remove('success', 'erro')
  ev.preventDefault()
  errorArea.textContent = ""
  email.value
  senha.value
  try{
    nome.classList.add('success')
    TrataEmail(email.value)
    email.classList.add('success')
    TrataSenha(senha.value)
    senha.classList.add('success')
  }catch(error){
    errorArea.textContent = error.message
    document.getElementById(error.input).classList.add('erro')
  }
  //document.getElementById('email').value = ''
  //document.getElementById('senha').value = ''
})