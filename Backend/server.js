const express = require("express")
const dotenv = require("dotenv").config()
const router = require("./Router/Routes")
const dbconnection = require("./DB_Connecation/database")
const App = express()
const cors = require("cors")


App.use(express.json())

App.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

App.use("/api/auth", router)

dbconnection()
App.listen(process.env.PORT, () => {
    console.log(`The server runing on ${process.env.PORT}`)
})