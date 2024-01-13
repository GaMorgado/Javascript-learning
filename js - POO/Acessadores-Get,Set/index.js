class Wallet{
  #amount
  #username

  constructor(){
   
    this.#amount = 100.99 * 100
  }

  get amout(){
    return this.#amount / 100
  }

  set username(newUserName){
    this.#username = newUserName
  }

  get username(){
    return this.#username 
  }
}

const myWallet = new Wallet()

console.log(myWallet.amout)
myWallet.username = "Morgs"
console.log(myWallet.username)