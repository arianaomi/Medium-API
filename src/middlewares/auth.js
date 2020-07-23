//
const jwt = require('../lib/jwt')
const Writer = require('../models/writer')

async function auth(request, response, next) {
  try {
    const { authorization } = request.headers
    //console.log('auth: ', authorization)
    const decodedToken = jwt.verify(authorization)
    //console.log('decoded Token: ', decodedToken)
    const writer = await Writer.findById(decodedToken.id)
    request.writer = writer
    next()
  } catch (error) {
    response.json({
      success: false,
      error: 'No token provided',
    })
  }
}

module.exports = auth
