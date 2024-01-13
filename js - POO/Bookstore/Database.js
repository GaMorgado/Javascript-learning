module.exports = class Database{
   #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: []
   }

   find(key){
    return this.#storage[key]
   }

   saveAuthor(author){
    this.#storage.authors.push(author)
   }

   findBookByName(book){
    return this.#storage.books.find(b => b.name === book)
   }

   saveBook(book){
    const bookExist = this.findBookByName(book.name)
    if (!bookExist){
      this.#storage.books.push(book)
    }
   }

   addBookToStock(bookName, quantity){
    const book = this.findBookByName(bookName)
    book?.addToStock(quantity)
   }

   removeBooksFromStock(bookName, quantity){
    const book = this.findBookByName(bookName)
    book?.removeFromStock(quantity)
   }

   findPosterByName(poster){
    return this.#storage.posters.find(p => p.name === poster)
   }

   savePoster(poster){
    const PosterExist = this.findPosterByName(poster.name)
    if (!PosterExist){
      this.#storage.posters.push(poster)
    }
   }

   addPosterToStock(posterName, quantity){
    const poster = this.findPosterByName(posterName)
    if(poster){
      this.#storage.posters.poster.addInStock(quantity)
    }
   }

   removePosterFromStock(posterName, quantity){
    const poster = this.findPosterByName(posterName)
    if(poster){
      this.#storage.posters.poster.removeFromStock(quantity)
    }
   }

   saveUser(user){
    const userExist = this.#storage.users.find(u => u.email = user.email)
    if(!userExist){
      this.#storage.users.push(user)
    }
   }
   saveOrder(order){
    this.#storage.orders.push(order)
   }

   showStorage(){
    console.table(this.#storage.authors)
    console.table(this.#storage.books)
    console.table(this.#storage.posters)
    console.table(this.#storage.users)
    console.table(this.#storage.orders.map(order => order.data))
   }
}