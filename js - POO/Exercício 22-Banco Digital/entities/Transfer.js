module.exports = class Transfer{
  constructor(UserSend, UserReceived, value){
    this.UserSend = UserSend
    this.UserReceived = UserReceived
    this.value = value
    this.TransferDate = new Date()
  }
}