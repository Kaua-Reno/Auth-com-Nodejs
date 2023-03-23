// importações
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

// Config JSON response
app.use(express.json())

//Models
const User = require('./models/User')

// Public Route
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Bem vindo a nossa API'})
})

//Register User
app.post('/auth/register', async(req, res) => {
    const {name, email, password, confirmpassword} = req.body

    // validations
    if (!name) {
        return res.status(422).json({ msg: "Nome é Obrigatorio"})
    }
    if (!email) {
        return res.status(422).json({ msg: "Email é Obrigatorio"})
    }
    if (!password) {
        return res.status(422).json({ msg: "A senha é Obrigatorio"})
    }
})

//Credencial
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose
    .connect(
        `mongodb+srv://${dbUser}:${dbPassword}@auth-test.j0tqker.mongodb.net/?retryWrites=true&w=majority`
        )
    .then(() =>{
        app.listen(3000)
        console.log('Conectou ao Banco!')
    })
    .catch((err) => console.log(err))