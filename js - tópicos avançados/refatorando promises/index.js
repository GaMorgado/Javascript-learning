async function imcCalculator(alt, pes){
      if(!isNaN(alt) && !isNaN(pes)){
        return pes/(alt*alt)
      }else{
        return Promise.reject('Parametros precisam ser números')
      }
  }

async function MostraResultado(altura, peso){
  try{
    const result = await imcCalculator(altura, peso)
    console.log(`O resultado do IMC é ${result.toFixed(2)}`)
    if (result < 18.5) {
      console.log(`magreza`)
    } else if (result < 25) {
      console.log(`normal`);
    } else if (result < 30) {
      console.log(`sobrepeso`);
    } else if (result < 40){
      console.log(`obesidade`) ;
    } else {
      console.log(`obesidade grave`);
    }
    console.log('calculando...')
  }catch(err){
    console.log(err)
  }
  }
  
MostraResultado(1.74, 71)
MostraResultado(1.60, 48)
MostraResultado("txt", 71)
MostraResultado(1.72, 82)
MostraResultado(1.80, 120)