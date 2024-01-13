let word = prompt("Digite a palavra para identificação de palíndromos")
let inverted_word = ""

for(let i = word.length -1; i >= 0; i--){
  inverted_word += word[i]
}

if(word === inverted_word){
  alert("Isso é um palindromo\nA palavara normal era: " + word + "\nA palavra invertida é: " + inverted_word)
} else{
  alert("Desculpa, isso não é um palindromo\nA palavara normal era: " + word + "\nA palavra invertida é: " + inverted_word)
}