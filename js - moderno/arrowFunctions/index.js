function sumNormal (a, b){
  return a*b
}

console.log(sumNormal(6, 9))

const oldAnonima = function(a, b){
  return a * b
}

console.log(oldAnonima(5, 10))

const Arrow = (a, b) => a * b

console.log(Arrow(4, 10))