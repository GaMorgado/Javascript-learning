class Book{
  constructor(title){
    this.title = title
    this.published = false
  }
  publish(){
    this.published = true
  }
}

const TBBTM = new Book('TBBTM')
const YSM = new Book('YSM')

TBBTM.publish()

console.log(TBBTM)
console.log(YSM)