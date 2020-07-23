//
const moongose = require('mongoose')

const entriesSchema = new moongose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  subtitle: {
    type: String,
    required: true,
    trim: true,
  },
  writer: {
    type: moongose.Types.ObjectId,
    ref: 'writers',
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  content: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
    required: true,
  },
})

module.exports = moongose.model('entries', entriesSchema)
