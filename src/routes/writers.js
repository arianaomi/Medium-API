//
const express = require('express')
const router = express.Router()

const writers = require('../usecases/writers')
const auth = require('../middlewares/auth')

//middleware nivel router 
router.use(auth)

router.get('/', async (request, response) => {
  try {
    const allWriters = await writers.getAll()
    response.json({
      succes: true,
      data: allWriters,
    })
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error.message,
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const newWritersData = request.body
    const newWriters = await writers.create(newWritersData)
    response.json({
      success: true,
      data: newWriters,
    })
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error.message,
    })
  }
})

router.delete('/:id',  async (request, response) => {
  try {
    const id = request.params.id
    await writers.deleteById(id)

    response.json({
      success: true,
      message: 'writers removed',
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

router.patch('/:id',  async (request, response) => {
  try {
    const id = request.params.id
    const newData = request.body
    await writers.updateById(id, newData)

    response.json({
      success: true,
      message: 'Updated writers',
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

router.get('/:id',  async (request, response) => {
  try {
    const id = request.params.id
    const writersData = await writers.getById(id)

    response.json({
      success: true,
      data: writersData,
      message: 'byid',
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

module.exports = router
