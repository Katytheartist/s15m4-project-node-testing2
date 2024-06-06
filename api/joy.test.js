const request = require('supertest')
const db = require('../data/db-config')
const server = require('../server')

const joy1 = {joy_action: 'Pet a cat', joy_feeling: 'Feel a sense of inner peace and serenity'}
const joy2 = {joy_action: 'Play frisbee with a friend', joy_feeling: 'Chill and happy'}

beforeAll(async ()=>{
    await db.migrate.rollback()
    await db.migrate.latest()
})

    it('correct env var', ()=>{
        expect(process.env.DB_ENV).toBe('testing')
    })
