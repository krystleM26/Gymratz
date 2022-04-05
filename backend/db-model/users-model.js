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

async function insert(user) {
    cond [id] = await db('users').insert(user)
}

async function update(id, changes) {
    await db('users').update(changes).where('id', id)
    return getById(id)
}

module.exports = {
    find,
    getById,
    findBy,
    get,
    getById,
    update,
}