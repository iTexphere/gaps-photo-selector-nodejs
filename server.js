
require('dotenv').config();

const express = require('express')
const app= express()
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})

const db=mongoose.connection
db.on('error', (error)=>console.error(error))
db.once('open', ()=>console.log('connected to db'))

app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const imageRouter= require('./routes/images')
app.use('/images',imageRouter)
app.listen(8080, ()=> console.log('server started'))