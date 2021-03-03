const express= require('express')
const dotenv= require('dotenv')
dotenv.config({path:'./config/config.env'}) 
const app=express();
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors')
const path= require('path')
const cors = require('cors');

app.use('/public', express.static('public'));
app.use('/uploads', express.static('uploads'));
//const client = require('twilio')(accountSID,authToken)
//console.log(accountSID)
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
connectDB();
//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors())
app.use('/api', require('./routes/Store'))
app.use('/api', require('./routes/Post'))
app.use('/api', require('./routes/Phone'))
const PORT=process.env.PORT 

const server = app.listen( PORT, ()=>{
console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
})


  