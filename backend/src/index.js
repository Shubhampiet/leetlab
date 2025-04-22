import express from "express"
import dotenv from "dotenv"
import cookieparser from "cookie-parser"

dotenv.config()

const app = express()
app.use(cookieparser())

app.get("/",(req,res)=>{
   return res.status(200).send("Hello")
})

app.listen(process.env.PORT,()=>{
    console.log("App is listening", process.env.PORT)
})