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
  },
  date: {
    type: Date,
  },
  isPopular: {
    type: Boolean,
  },
})

module.exports = moongose.model('entries', entriesSchema)
