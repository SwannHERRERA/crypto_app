const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
require('./db/db')

const userRoutes = require('./routers/user')
const tokenRoutes = require('./routers/token')

const app = express()

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()) // application/json

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use('/user', userRoutes)

app.use('/token', tokenRoutes)

app.listen(process.env.PORT)
