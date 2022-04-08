const db = require('../../../data/dbConfig')

function get() {
    return db('classes')
}



function getById(id) {
    return db('classes').where('id', id).first()
}

async function add(data) {
    const [id] = await db('classes').insert(data)
    return getById(id)

}

module.exports = {
    get,
    getById,
    add
}