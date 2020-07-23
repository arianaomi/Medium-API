//* Definición del servidor
const express = require('express')
const app = express()

const entriesRouter = require('./routes/entries')
const writersRouter = require('./routes/writers')

const cors = require('cors')

//! middleware a nivel de aplicación
app.use(cors())
app.use(express.json())

//! Routers
app.use('/entries/', entriesRouter)
app.use('/writers/', writersRouter)

app.get('/', (request, response) => {
  response.json({ success: true, message: 'kodemia APIv8' })
})

module.exports = app
