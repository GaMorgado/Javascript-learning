function show(){
  const contact_list = document.getElementById("contact-list")
  console.log(contact_list)

  const list_Elements = document.getElementsByTagName("li")
  console.log(list_Elements)   

  const contact_input = document.getElementsByClassName("contact-input")
  console.log(contact_input)

  const contact1 = document.getElementsByName("contact1")
  console.log(contact1)

  const contact = document.querySelectorAll("#contact-list > li > label")
  console.log(contact)

  const firstContact = document.querySelector("#contact-list > li > label") //primeiro elemento
  console.log(firstContact)
}