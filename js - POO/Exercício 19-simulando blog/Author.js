const Post = require('./Post')

posts = []
class Author{
  constructor(name){
    this.name = name
    this.post = []   
  }
  writePost(title, body){
    const post = new Post(title, body, this) 
    this.post.push(post)
    return post
  }
}

module.exports = Author