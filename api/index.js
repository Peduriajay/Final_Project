const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = 'adfniwekd7846hdjdbjsdvvdgs43';

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());


mongoose.connect('mongodb+srv://ajaykumar:Ajay1117@cluster0.10t8zaj.mongodb.net/?retryWrites=true&w=majority')
app.post('/register', async (req,res) => {
    const{username,password} = req.body;
    try{
        const userDoc = await User.create({
            username, 
            password:bcrypt.hashSync(password,salt),
        });
        res.json(userDoc);
    } catch(e) {
        res.status(400).json(e);
    }
    app.get('/profile', (req,res) => {
        res.json(req.cookies);
    })
});

app.post('/login' , async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
       if(passOk) {
        //logged
        jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) =>{
            if(err) throw err;
            res.cookie('token', token).json('ok');

        } );
       } else{
        res.status(400).json('wrong credentials');
       }
     });

app.listen(4000);