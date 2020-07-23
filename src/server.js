//* Definición del servidor
const express = require('express')
const app = express()

const cors = require('cors')

//middleware a nivel de aplicación
app.use(cors())
app.use(express.json())

//Routers
app.get('/', (request, response) => {
  response.json({ success: true, message: 'kodemia APIv8' })
})

module.exports = app
