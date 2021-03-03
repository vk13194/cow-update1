const mongoose = require('mongoose');
const connectDB = async () =>{
    const conn = await mongoose.connect("mongodb+srv://animal:animal123@cluster0.ldcb0.mongodb.net/animalshop", {
        useNewUrlParser:true,
        useCreateIndex:true, 
        useFindAndModify:false,
        useUnifiedTopology:true
    });
    console.log(`mongodb connected :${conn.connection.host}`.cyan.underline.bold)
}

module.exports= connectDB