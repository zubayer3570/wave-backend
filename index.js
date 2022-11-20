const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
const contactMailRouter = require("./routers/contactMail.router")
const app = express()
app.use(express.json())
app.use(cors())


app.use('/contactMail', contactMailRouter)


app.get("/", (req, res) => res.send("server is working fine!"))
app.listen(5000)