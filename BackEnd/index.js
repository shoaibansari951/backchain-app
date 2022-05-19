const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors = require('cors');
const mongoose=require('mongoose');
app.use(bodyParser.json());
app.use(cors());
const users= require('./routes/userRoutes');
const admin= require('./routes/adminRoutes');
const jackpot= require('./routes/jackpotRoutes');
// const cors=require('cors');

mongoose.connect("mongodb://127.0.0.1/blockchain", { useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection.once('open', function () {
    console.log('connection has been made')
}).on('error', function (error) {
    console.log(error)
});

app.use('/',users);
app.use('/',admin);
app.use('/',jackpot);
// app.post('/api/login/:email/:name/:accountAddress',(req,res)=>{
//     console.log('name',req.params.email);
//     console.log('email',req.params.name);
//     console.log('accountAddress',req.params.accountAddress);
//     res.send('hey there');
//     // res.redirect('google.com')
// });

app.listen(5000,()=>{
    console.log("Server started at 5000");
});