const Sequelize = require('sequelize')

const db = require('./db')


const Post = db.sequelize.define('curso', {
nome: {
    type: db.Sequelize.STRING
  },
  conteudo: {
    type: db.Sequelize.TEXT
  }
})

module.exports = Post

//Post.sync({force: true})
