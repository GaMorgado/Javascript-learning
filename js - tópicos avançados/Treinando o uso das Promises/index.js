function imcCalculator(alt, pes){
  return new Promise((resolve, rejected) =>{
      if(!isNaN(alt) && !isNaN(pes)){
        resolve(pes/(alt*alt))
      }else{
        rejected('Parametros precisam ser números')
      }
  })
}

function MostraResultado(altura, peso){
  imcCalculator(altura, peso).then((resultado)=>{
    console.log(`O resultado do IMC é ${resultado.toFixed(2)}`)
    if (resultado < 18.5) {
      console.log(`magreza`)
    } else if (resultado < 25) {
      console.log(`normal`);
    } else if (resultado < 30) {
      console.log(`sobrepeso`);
    } else if (resultado < 40){
      console.log(`obesidade`) ;
    } else {
      console.log(`obesidade grave`);
    }
  }).catch((error)=>{
      console.log(error.message)
  })

  console.log('calculando...')
}



MostraResultado(1.74, 71)
MostraResultado(1.60, 48)
MostraResultado("txt", 71)
MostraResultado(1.72, 82)
MostraResultado(1.80, 120)