const Database = require("./Database")
const Author = require("./entities/Author")
const Book = require("./entities/Book")
const Order = require("./entities/Order")
const Poster = require("./entities/Poster")
const User = require("./entities/User")

module.exports = class App{
  static #database = new Database()

  createUser(name, email, password){
    const user = new User(name, email, password)
    App.#database.saveUser(user)
  }

  getUser(){
    return App.#database.find('users')
  }

  createAuthor(name, nationality, bio){
    const author = new Author(name, nationality, bio)
    App.#database.saveAuthor(author)
  }

  getAuthor(){
    return App.#database.find('authors')
  }

  createBook(title, synopsis, genre, pages, author, description, price, inStock){
    const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
    App.#database.saveBook(book)
  }

  addBock(Bookname, quantity){
    App.#database.addBookToStock(Bookname, quantity)
  }

  getBooks(){
    return App.#database.find('books')
  }

  createPoster(name, width, height, description, price, inStock){
    const poster = new Poster(name, width, height, description, price, inStock)
    App.#database.savePoster(poster)
  }

  addPoster(poster, quantity){
    App.#database.addPosterToStock(poster, quantity)
  }

  getPosters(){
    return App.#database.find('posters')
  }

  createOrder(items, user){
    const order = new Order(items, user)
    App.#database.saveOrder(order)
    order.data.items.forEach(({product, quantity}) => {
      if (product instanceof Book){
        App.#database.removeBooksFromStock(product.name, quantity)
      }else if(product instanceof Poster){
        App.#database.removePosterFromStock(product.name, quantity)
      }
    })
  };

  getOrders(){
    return App.#database.find('orders')
  }

  showDataBase(){
    App.#database.showStorage()
  }
}
