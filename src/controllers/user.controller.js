const express = require("express")

const router = express.Router();
const User = require("../models/users.model");

const register = async(req, res) => {
    try {
        
    const { username, email, password }  = req.body;

    const user = new User({
        username, email,password
    });
    
    await user.save()
    return res.status(201).send(user);

    } catch (error) {
         return res.status(400).send({error:error.message})
    }
}

module.exports = { register };

