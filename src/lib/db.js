//* Conectar a la db
const mongoose = require('mongoose')

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env,
  CONN_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

module.exports = () =>
  mongoose.connect(
    CONN_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } //! sin cb nos regresa una promesa, si lo ponemos ya no nos regresa una promesa
  )
