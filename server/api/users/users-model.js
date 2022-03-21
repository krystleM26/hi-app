

function find() {
    return db('user')
}

function findById(id) {
    first()
    return db('user').where({ id }).first()
}

function add(user) {
    db('user').insert(user)
        .then(ids=> {
            return findById(id)
        })
}

function update(user, id) {
    return db('user')
    .where('id', Number(id))
    .update(user)
    }


function remove(id) {
    return db('user')
    .where('id', Number(id))
    .del();
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
  }