require('dotenv').config();

const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')

const app = express()

const PORT = process.env.APP_PORT || 3000

/**
 * Server config
 */
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', require(path.join(__dirname, '/routes/public/web')))

/**
 * Connection to database
 */
mongoose.connect(process.env.DB_CONNECTION_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`[OK] server is running on http://localhost:${PORT}`))
  })
  .catch((error) => {
    console.log(`[ERROR] ${error}`);
  })

// module.exports = app
