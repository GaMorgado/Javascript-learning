async function asyncSum(a, b){
  if(typeof a !== 'number' || typeof b !== 'number'){
    return Promise.reject('Argumentos precisam ser numeros')
  }
  return a  + b
}


//async function execute(){
// asyncSum(50, 33).then(result => {
//  console.log(result)
//})
//}

async function execute(){
  const result = await asyncSum(50, 33)
  console.log(result)
}
console.log(asyncSum(23, 29))
execute()