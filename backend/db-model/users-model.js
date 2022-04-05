const db = require('../../data/dbConfig')

function findby(username) {
    return db('users').where('username', username).first()
}