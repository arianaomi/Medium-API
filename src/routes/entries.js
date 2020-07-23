//
const express = require('express')
const router = express.Router()

const entries = require('../usecases/entries')

router.get('/', async (request, response) => {
  try {
    const allEntries = await entries.getAll()
    response.json({
      succes: true,
      data: allEntries,
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
    const newEntriesData = request.body
    const newEntries = await entries.create(newEntriesData)
    response.json({
      success: true,
      data: newEntries,
    })
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error.message,
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const id = request.params.id
    await entries.deleteById(id)

    response.json({
      success: true,
      message: 'Entries removed',
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const id = request.params.id
    const newData = request.body
    await entries.updateById(id, newData)

    response.json({
      success: true,
      message: 'Updated Entries',
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message,
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const id = request.params.id
    const entriesData = await entries.getById(id)

    response.json({
      success: true,
      data: entriesData,
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
