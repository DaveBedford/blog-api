require('dotenv').config()
bodyParser = require('body-parser');

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.json())

const blogRoutes = require('./routes/blogRoutes')
app.use('/api', blogRoutes)

app.listen(3000, () => console.log('Server Started'))