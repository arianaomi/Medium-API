//
const Entries = require('../models/entry')

function getAll() {
  return Entries.find()
}

function create(EntriesData) {
  return Entries.create(EntriesData)
}

function deleteById(idEntries) {
  return Entries.findByIdAndDelete(idEntries)
}

function updateById(idEntries, newData) {
  return Entries.findByIdAndUpdate(idEntries, newData)
}
async function getById(id) {
  return await Entries.findOne({ _id: id }).populate('writer')
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
  getById,
}
