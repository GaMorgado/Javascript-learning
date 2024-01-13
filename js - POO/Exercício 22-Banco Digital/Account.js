module.exports = class Account{
  #saldo 
  constructor(user){
    this.user = user
    this.#saldo = 0
    this.deposits = []
    this.loans = []
    this.transfers = []
  }

  get saldo(){
    return this.#saldo
  }

  DepositCash(deposit){
    this.#saldo += deposit.value
    this.deposits.push(deposit)
  }

  LoanCash(loan){
    this.#saldo += loan.LoanValue
    this.loans.push(loan)
  }

  transferCash(transfer){
    if(this.user.email == transfer.UserSend.email){
      this.#saldo -= transfer.value
      this.transfers.push(transfer)
    }else if(this.user.email == transfer.UserReceived.email){
      this.#saldo += transfer.value
      this.transfers.push(transfer)
    } 
  }
}