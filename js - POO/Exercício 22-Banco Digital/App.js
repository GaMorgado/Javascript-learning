const Deposit = require("./entities/Deposit")
const Loan = require("./entities/Loan")
const Transfer = require("./entities/Transfer")
const User = require("./entities/User")

module.exports = class App{
  static #userList = []

  static findUser(Email){
    const user = this.#userList.find(u => u.email == Email)
    return user ?? null
}

  static newUser(fullName, email){
    const userExist = App.findUser(email)
    if(userExist){
      console.log('Email inválido')
    }else{
      this.#userList.push( new User(fullName, email))
    } 
  }

  static deposit(email, value){
    const UserExist = App.findUser(email)
    if(UserExist){
      const deposit = new Deposit(value)
      UserExist.account.DepositCash(deposit)
    }else{
      console.log("Email inválido")
    }
  }

static transfer(FromUserEmail, toUserEmail, value){
  const fromUser = App.findUser(FromUserEmail)
  const toUser = App.findUser(toUserEmail)
  if(fromUser && toUser){
    const newTransfer = new Transfer(fromUser, toUser, value)
    fromUser.account.transferCash(newTransfer)
    toUser.account.transferCash(newTransfer)
  }
}

static loan(email, value, NumberInstallments){
  const user = App.findUser(email)
  if(user){
    const loan = new Loan(value, NumberInstallments)
    user.account.LoanCash(loan)
  }
}
 static ChangeBankInterest(newfee){
    Loan.bankInterest = newfee
  }
}