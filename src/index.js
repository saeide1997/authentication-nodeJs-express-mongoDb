const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const dotenv = require("dotenv").config()
const path = require('path')
const dbConnect = require('./config/dbConnect.js')
const authRoutes = require('./routes/authRoutes.js')
const userRoutes = require('./routes/userRoutes.js')

dbConnect()
const app = express()

// --Middleware
app.use(express.json())

app.use(express.static('public'))
// app.use(expressLayouts);
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

//--Routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)


const port = 7003
app.listen(port, () => {
    console.log(`server running on port: ${port} `)
})