function Book(title, pages, tags, author){
  this.title = title
  this.pages = pages
  this.tags = tags
  this.author = author
  this.published = false
  this.inStock = 0
  this.addInStock = function addInStock(quantity){
    this.inStock += quantity
  }
  this.save = function(){

  }
}

const author = {name: "Morgs Olivs"}

const tags = ["comedy, sci-fi"]

const TBBTM = new Book("TBBTM", 2033, tags, author)

console.log(TBBTM)

const YSM = new Book("YSH", 2314, tags, author)

console.log(YSM)