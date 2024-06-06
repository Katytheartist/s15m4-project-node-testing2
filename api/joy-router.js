const express = require('express')
const router = express.Router()
const Joy = require('./joy-model')

router.delete('/:id', async (req, res)=>{
    const id = req.params.id
    const delJoy = await Joy.deleteJoy(id)
    res.status(200).json(delJoy)
})

module.exports = router