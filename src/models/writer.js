//
const moongose = require('mongoose')

const writersSchema = new moongose.Schema({
  name: {
    type: String,
    maxlength: 100,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    match: /^.+@.+\..+$/,
  },
  password: {
    type: String,
    required: true,
    min: 1,
  },
})

module.exports = moongose.model('writers', writersSchema)
