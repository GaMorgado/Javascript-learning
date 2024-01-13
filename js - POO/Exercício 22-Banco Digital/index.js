const App = require('./App')

App.newUser('Gabriel Morgado', 'Gabriel@gmail.com')
App.newUser('ferfs', 'ferfs@gmail.com')
App.newUser('pedro', 'pedro@gmail.com')

console.log(App.findUser('Gabriel@gmail.com'))
console.log(App.findUser('Gabriel@gmail.com').account)
console.log(App.findUser('ferfs@gmail.com'))
console.log(App.findUser('ferfs@gmail.com').account)
console.log(App.findUser('pedro@gmail.com'))
console.log(App.findUser('pedro@gmail.com').account)



App.deposit('Gabriel@gmail.com', 500)

App.transfer('Gabriel@gmail.com', 'ferfs@gmail.com', 100)

App.ChangeBankInterest(10)
App.loan('pedro@gmail.com', 2000, 24)

console.log(App.findUser('Gabriel@gmail.com'))
console.log(App.findUser('Gabriel@gmail.com').account)
console.log(App.findUser('ferfs@gmail.com'))
console.log(App.findUser('ferfs@gmail.com').account)
console.log(App.findUser('pedro@gmail.com'))
console.log(App.findUser('pedro@gmail.com').account)

console.log(App.findUser('pedro@gmail.com').account.loans[0].installments)
