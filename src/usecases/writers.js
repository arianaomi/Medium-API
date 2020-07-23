//
const Writers = require('../models/writer')

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
module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
  getById,
}
