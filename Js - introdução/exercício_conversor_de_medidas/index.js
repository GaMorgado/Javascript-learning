const metros = parseFloat(prompt("Quantos metros você deseja converter"))
const opcao = prompt("para o que você deseja converter? \nmilímitro(mm) \ncentímetro(cm) \ndecímetro(dm) \ndecâmetro(dam) \nhectômetro(hm) \nquilômetro(km)")

switch(opcao){
  case "mm":
    alert("reultado: " + metros + " m= " + metros * 1000 + "mm")
  break
  case "cm":
    alert("reultado: " + metros + " m= " + metros * 100 + "cm")
  break
  case "dm":
    alert("reultado: " + metros + " m= " + metros * 10 + "dm")
  break
  case "dam":
    alert("reultado: " + metros + " m= " + metros / 10 + "dam")
  break
  case "hm":
    alert("reultado: " + metros + " m= " + metros / 100 + "hm")
  break
  case "km":
    alert("reultado: " + metros + " m= " + metros / 1000 + "km")
  break
  default: 
    alert("não foi possível converter")
}