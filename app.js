const express = require('express');
const mongoose = require('mongoose');
const dotenv=require('dotenv');
const authRoutes=require('./Routes/authRoute');
const orgRoutes=require('./Routes/organisationRoute');
const userRoutes=require('./Routes/userRoute');
const bodyParser=require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');



dotenv.config();
const app=express();




app.use(express.static('Public'));
const publicPath = path.join(__dirname, 'Public');
app.use(express.static(publicPath));
app.use(express.json());
app.use('/',authRoutes);
app.use('/',orgRoutes);
app.use('/',userRoutes);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));




mongoose.connect(process.env.URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(app.listen(process.env.PORT,()=>{
    console.log(`App is running on port: ${process.env.PORT}` )
}))
.catch((err) => console.log(err));



app.get('/',(req,res)=>{

        const filePath = path.join(publicPath, 'home.html');  // Replace with the desired HTML file
        res.sendFile(filePath);
      
})


