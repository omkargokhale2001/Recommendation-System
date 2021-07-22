const express = require('express')
const mongoose = require('./db/mongoose')
const User = require('./models/user')
const userRouter = require('./routers/user')
const { JsonWebTokenError } = require('jsonwebtoken')

const app = express()
const port = 3001



app.use(express.json())
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});
app.use(userRouter)



app.listen(port,()=>{
    console.log("Server is up on port "+String(port))
})
