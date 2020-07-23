//
const express = require('express')

const router = express.Router()

const writer = require('../usecases/writers')

// * /auth/sign-up
router.post('/sign-up', async (request, response) => {
  try {
    const signedUpWriter = await writer.signup(request.body)
    response.json({
      success: true,
      data: { writer: signedUpWriter },
    })
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error.message,
    })
  }
})

router.post('/sign-in', async (request, response) => {
  try {
    const { password, email } = request.body
    const token = await writer.login(email, password)
    response.json({
      success: true,
      data: {
        token,
      },
    })
  } catch (error) {
    response.status(401).json({
      success: false,
      error: error.message,
    })
  }
})

module.exports = router
