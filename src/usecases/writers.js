//
const Writers = require('../models/writer')

const bycrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')
const writer = require('../models/writer')

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
  return await Writers.findOne({ _id: id })
}

//! Creando writer
async function signup(writerData) {
  const { password, email } = writerData
  const writerByEmail = await Writers.findOne({ email })
  if (writerByEmail) {
    throw new Error(' Usuario ya existente')
  }
  const passwordEncripted = await bycrypt.hash(password)
  return Writers.create({
    ...writerData,
    password: passwordEncripted,
  })
}

async function login(email, passwordPlain) {
  const writerByEmail = await Writers.findOne({ email })
  if (!writerByEmail) {
    throw new Error('Datos incorrectos')
  }
  const isValid = await bycrypt.compare(passwordPlain, writerByEmail.email)
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
