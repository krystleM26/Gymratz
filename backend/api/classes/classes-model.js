const db = require('../../../data/dbConfig')

function get() {
    return db('classes')
}



function getById(id) {
    return db('classes').where('id', id).first()
}

module.exports = {
    get,
    getById
}