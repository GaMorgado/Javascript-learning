const Installment = require("./installment")

module.exports = class Loan{
  static #bankInterest = 1.05

    constructor(LoanValue, installments = 1){
      this.LoanValue = LoanValue
      this.installments = []
      for (let i = 1; i <= installments; i++){
       this.installments.push(new Installment(((this.LoanValue * Loan.#bankInterest) / installments), i))
      }
      this.LoanDate = new Date()
    }

  static get bankInterestRead(){
    return this.#bankInterest
  }

  static set bankInterest(fee){
    this.#bankInterest = 1 + (fee/100)
    }
  }
