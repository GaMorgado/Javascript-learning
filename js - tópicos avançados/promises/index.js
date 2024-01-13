const p = new Promise((resolve, reject) => {
  console.log('A promise está sendo executada.')
  setTimeout(() => {
      if (1 + 1 === 2) {
          reject("Algo deu errado!")
      }
      console.log('Resolvendo a promise...')
      resolve('Resultado')
  }, 3 * 1000)
})

console.log(p)

