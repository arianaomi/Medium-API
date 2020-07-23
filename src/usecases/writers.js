//
const Writers = require('../models/writer')

const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

function getAll() {
  return Writers.find()
}

function create(WritersData) {
  return Writers.create(WritersData)
}

function deleteById(idWriters) {
  return Writers.findByIdAndDelete(idWriters)
}

function updateById(idWriters, newData) {
  return Writers.findByIdAndUpdate(idWriters, newData)
}
async function getById(id) {
  const writerById = await Writers.findOne({ _id: id })
  if (!writerById) {
    throw new Error('Dato incorrecto')
  }
  return writerById
}

//! Creando writer
async function signup(writerData) {
  const { password, email } = writerData
  const writerByEmail = await Writers.findOne({ email })
  if (writerByEmail) {
    throw new Error(' Usuario ya existente')
  }
  const passwordEncripted = await bcrypt.hash(password)
  return Writers.create({
    ...writerData,
    password: passwordEncripted,
  })
}

async function login(email, passwordPlain) {
  const writerByEmail = await Writers.findOne({ email })
  console.log(writerByEmail)
  if (!writerByEmail) {
    throw new Error('Datos incorrectos')
  }
  console.log('hola')
  const isValid = await bcrypt.compare(passwordPlain, writerByEmail.password)
  console.log(isValid)
  if (!isValid) {
    throw new Error('Datos incorrectos')
  }

  return jwt.sign({ id: writerByEmail._id })
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
  getById,
  signup,
  login,
}
