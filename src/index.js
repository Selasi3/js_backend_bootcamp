const express = require("express");
const app =express();
const {register} = require("./controllers/user.controller")
const connect = require("./config/db");

app.use(express.json());
app.get("/", (req,res) =>{
    res.send("We are on homepage")
})

app.post("/register", register)






app.listen(5000, async() => {
    try {
        await connect
        console.log("Listening on port 5000")

    } catch (error) {
        console.log({error:error.message})
    }
})