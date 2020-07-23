//* Definición del servidor
const express = require('express')
const app = express()

const entriesRouter = require('./routes/entries')
const writersRouter = require('./routes/writers')
const authRouter = require('./routes/auth')

const cors = require('cors')

//! middleware a nivel de aplicación
app.use(cors())
app.use(express.json())

//! Routers
app.use('/entries/', entriesRouter)
app.use('/writers/', writersRouter)
app.use('/auth', authRouter)

app.get('/', (request, response) => {
  response.json({ success: true, message: 'MediumBlog-API' })
})

module.exports = app
