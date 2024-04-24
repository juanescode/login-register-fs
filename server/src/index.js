// dependecias 
const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./models/db')
const router = require('./api/endPoint')

app.use(express.json())
app.use(cors())

app.use('/', router)

// Servidor 
app.listen(3002, () => {
    console.log('Server is running on port 3002')
})

