const express = require('express');
const mongoose = require('mongoose');
const dotenv=require('dotenv');
const authRoutes=require('./Routes/authRoute');
const orgRoutes=require('./Routes/organisationRoute');
const userRoutes=require('./Routes/userRoute');
const bodyParser=require('body-parser');


dotenv.config();
const app=express();


app.use(express.json());
app.use('/auth',authRoutes);
app.use('/org',orgRoutes);
app.use('/user',userRoutes);
app.use(bodyParser.json());

mongoose.connect(process.env.URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(app.listen(process.env.PORT,()=>{
    console.log(`App is running on port: ${process.env.PORT}` )
}))
.catch((err) => console.log(err));



app.get('/',(req,res)=>{
    res.send("Helllo");
})


