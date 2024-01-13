const Author = require("./Author");

const morgs = new Author('Morgs')
console.log(morgs)
const post = morgs.writePost('Morgs morreu', 'corpo afundou')

post.addComent("Ferfs", "Muito bom")

console.log(morgs)
console.log(post)
