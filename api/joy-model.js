const db = require('../data/db-config')

async function createJoy(makeJoy){
    const [id] = await db('joy').insert(makeJoy)
    return db('joy').where('joy_id', id).first()
}

async function deleteJoy(id){
    const deletedJoy = await db('joy').where('joy_id', id).first()
    await db('joy').where('joy_id', id).del()
    return deletedJoy
}

module.exports = {
    createJoy,
    deleteJoy
}