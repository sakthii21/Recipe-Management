const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const reciperouter = require("./routes/recipe");
const connectDb = require("./config/connectionDb")
const cors = require("cors")

const PORT = process.env.PORT || 3000
connectDb()
app.use(express.json())
app.use(cors())

app.use(express.static("public"))
app.get("/",(req, res) =>{
    res.json({message:"hello world"})
})

app.use('/recipe',reciperouter);
app.use('/',require("./routes/user"))

app.listen(PORT,(err)=>{
    console.log(`app is listening on ${PORT}`)
})