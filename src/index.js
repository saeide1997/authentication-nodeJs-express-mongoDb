const express = require('express')
const dotenv = require("dotenv").config()
const path = require('path')
const dbConnect = require('./config/dbConnect.js')
const authRoutes = require('./routes/authRoutes.js')
const userRoutes = require('./routes/userRoutes.js')

dbConnect()
const app = express()

// --Middleware
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

app.use(express.static('public'))

//--Routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)


const port = 7000
app.listen(port, () => {
    console.log(`server running on port: ${port} `)
})