import mongoose from 'mongoose';



const regUsers=mongoose.Schema({
    

        fullName:{
            type:String,
            required: true
        },
        userEmail:{
            type:String,
            required:true,
            lowercase:true,
            },
        category:{
            type:String,
            required:true
        },
        dateOfIssue:{
            type:Date,
            required:true
        },
    issuedBy:{
        type:String,
        required:true
        },

    hashPass:{
        type:String
    }

    
    
})



const orgSchema=new mongoose.Schema({

name:{
    type:String,
    required:true,
    minlength:3
}
,
email:{
type:String,
required:true,
lowercase:true,
}
,
password: {
    type: String,
    required: true,
    minlength: 8
},

username:{
    type:String,
    unique:true,
    required:true,
    lowercase:true,
    minlength:3
},

regestiredUsers:[regUsers],

});




const Organisation=mongoose.model('Organisation',orgSchema);



module.exports = Organisation;


