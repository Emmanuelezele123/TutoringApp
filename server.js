const express = require("express")
const connectDB = require("./db/index")
require("dotenv").config()

//initialize express
const app = express()

//create a port
const PORT = process.env.PORT

//connect to db
connectDB()


//Initialize express middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//create a basic route
app.get("/", (req, res) => {
  res.json({ success: true, message: "welcome to our tutor app" })
})

//listen
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})