
function addContact(){

  //Variavel onde vou adicionar e remover os contatos
  const ContactArea = document.getElementById('Contact-list')

  //Criando os contatos
  const newContactUl = document.createElement('ul')

  //titulo do contato
  const newContacth3 = document.createElement('h3')
  newContacth3.innerHTML = 'Contato'

  //campo da lista do contato-
  const newContactLiName = document.createElement('li')
  newContactLiName.innerText = 'Nome: '

  //input de nome
  const newContactNameInput = document.createElement('input')
  newContactNameInput.type = 'text'
  newContactNameInput.id = 'name-input'

  //campo da lista do contato-
  const newContactLiPhone = document.createElement('li')
  newContactLiPhone.innerText = 'telefone: '
  
  //input de Telefone
  const newContactPhoneInput = document.createElement('input')
  newContactPhoneInput.type = 'text'
  newContactPhoneInput.id = 'phone-input'

  //campo da lista do contato-
  const newContactLiAddress = document.createElement('li')
  newContactLiAddress.innerHTML = '<label for="address-input">Endereço: </label>'

  //input de endereço
  const newContactAddressInput = document.createElement('input')
  newContactAddressInput.type = 'text'
  newContactAddressInput.id = 'address-input'

  //adicionando no html (li>inputNAME)
  newContactLiName.appendChild(newContactNameInput)

  //adicionando no html (li>inputPHONE)
  newContactLiPhone.appendChild(newContactPhoneInput)

  //adicionando no html (li>inputADDRESS)
  newContactLiAddress.appendChild(newContactAddressInput)

  //adicionando no html (ul>liname)
  newContactUl.appendChild(newContactLiName)

  //pula linha
  newContactUl.appendChild(document.createElement('br'))

  //adicionando no html (ul>liphone)
  newContactUl.appendChild(newContactLiPhone)

  //pula linha
  newContactUl.appendChild(document.createElement('br'))

  //adicionando no html (ul>liaddress)
  newContactUl.appendChild(newContactLiAddress)

  //adicionando no html (section>ul)
  ContactArea.append(newContacth3, newContactUl)

}

function removeContact(){
  const ContactArea = document.getElementById('Contact-list')

  const titles = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')

  ContactArea.removeChild(titles[titles.length - 1])
  ContactArea.removeChild(contacts[contacts.length - 1])
}