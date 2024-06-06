const db = require('../data/db-config')

async function createJoy(makeJoy){
    const [id] = await db('joy').insert(makeJoy)
    return db('joy').where('joy_id', id).first()
}

module.exports = {
    createJoy
}