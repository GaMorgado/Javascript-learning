const Comment = require('./Comment')

class Post{
  constructor(title, body, author){
    this.author = author
    this.title = title
    this.body = body
    this.coments = []
    this.createdAt = new Date()
  }
  addComent = function(username, content){
    this.coments.push(new Comment(username, content))
  }
}

module.exports = Post