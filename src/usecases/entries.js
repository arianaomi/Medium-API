//
const Entries = require('../models/entry')

function getAll() {
  return Entries.find().populate('writer')
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
  const entriesById = await Entries.findOne({ _id: id }).populate('writer')
  if (!entriesById) {
    throw new Error('Dato incorrecto')
  }
  return entriesById
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
  getById,
}
