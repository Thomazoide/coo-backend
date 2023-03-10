const {Schema, model} = require('mongoose')

const file = new Schema({
	fileName: {},
	sheets: [{}]
})

module.exports = model('files', file)