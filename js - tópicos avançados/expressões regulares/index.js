function phoneNumber(PhoneNumberString){
  const fixedString = PhoneNumberString.replace(/[\sa-zA-Z]/g, "")
  this.countryCode = fixedString.match(/(?<=)\+\d{1,3}/)[0]
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
  this.number = fixedString.match(/(?<=\)).{9}/)[0].replace(/-/g, "")
}


console.log( new phoneNumber('+55 (11) 98753-3524'))

console.log( new phoneNumber('+55 (11) a8bg 3-3524'))