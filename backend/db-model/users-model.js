const db = require('../../data/dbConfig')

function find(username) {
    return db('users').where('username', username).first()
}

function findBy(filter) {
    return db('users').where(filter)
}

function get() {
    return db('users')
}

function getById(id) {
    return db('users').where('id', id).first()

}
async function add(user) {
    const [id] = await db("users").insert(user)
    return getById(id)
  }

async function update(id, changes) {
    await db('users').update(changes).where('id', id)
    return getById(id)
}

module.exports = {
    find,
    findBy,
    get,
    getById,
    update,
    add,
}