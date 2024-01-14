import mongoose from 'mongoose';

const userHistory=new mongoose.Schema({
    fileName:{
        type: String,
    }
},
{timestamp:true}
)

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        minlength:3
    }
    ,
    email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    }
    ,
    password:{
        type:String,
        required:true,
        minlength:8
    },
    username:{
        type:String,
        unique:true,
        required:true,
        minlength:3
    },
    history:[userHistory]

});


const User=mongoose.model('User',userSchema);

export default User;