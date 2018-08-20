const express = require('express')
const bodyParser = require('body-parser')

const fieldRouter = require('./routes/field')

const app = express()


app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/field', fieldRouter)

module.exports = app