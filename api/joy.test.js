const request = require('supertest')
const db = require('../data/db-config')
const server = require('../server')
const Joy = require('./joy-model')

const joy1 = {joy_action: 'Pet a cat', joy_feeling: 'Feel a sense of inner peace and serenity'}
const joy2 = {joy_action: 'Play frisbee with a friend', joy_feeling: 'Chill and happy'}

beforeAll(async ()=>{
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async ()=>{
    await db('joy').truncate()
})

afterAll(async ()=>{
    db.destroy()
})

it('correct env var', ()=>{
    expect(process.env.DB_ENV).toBe('testing')
})

describe('joy model functions', ()=>{
    describe('creates joy', ()=>{
        test('adds joy to db', async ()=>{
            let joyz
            await Joy.createJoy(joy1)
            joyz=await db('joy')
            expect(joyz).toHaveLength(1)
        })
        test('inserts joy action and feeling', async ()=>{
            const joy = await Joy.createJoy(joy1)
            expect(joy).toMatchObject({joy_id: 1, ...joy})
        })
    })
    describe('[DELETE]')
})
