const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Connected"))
app.listen(4000, () => console.log("Server is up and running"))