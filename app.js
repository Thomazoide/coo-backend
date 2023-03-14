const cors = require('cors')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.json({limit: '200mb'}))
app.use(express.json())
app.use('/api/files', require('./routes/files.routes'))

module.exports = app
