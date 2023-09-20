const mongoose = require('mongoose');
const {isEmail}=require('validator');
const bcrypt=require('bcrypt');


const regUsers=mongoose.Schema({
    

        fullName:{
            type:String,
            required: [true,'Please enter a name'],
        },
        userEmail:{
            type:String,
            required:[true,'Please enter a valid email address'],
            lowercase:true,
            validate:[isEmail,'Please enter a valid email address']
            },
        category:{
            type:String,
            required:[true,'Please enter a valid category']
        },
        dateOfIssue:{
            type:String,
            required:[true,'Please enter a valid date']
        },
    issuedBy:{
        type:String,
        required:[true,'Please enter a valid name']
        }

    
    
})



const orgSchema=new mongoose.Schema({

name:{
    type:String,
    required:[true,'Please enter  name ot your organisation. '],
    minlength:[3,'Name of the organisation should be longer than 3 characters']
}
,
email:{
type:String,
required:[true,'Please enter a valid email address'],
lowercase:true,
validate:[isEmail,'Please enter a valid email address']
}
,
password: {
    type: String,
    required: [true, 'Please enter a valid password'],
    minlength: [8,'password should be at least 8 characters']
},

username:{
    type:String,
    unique:true,
    required:[true,'Please enter a username'],
    minlength:[3,'Username of the organisation should be longer than 3 characters']
},
regestiredUsers:[regUsers],

history:[]
});


orgSchema.pre('save',async function(next){
    const salt=await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,salt);
     next();
  })


orgSchema.statics.login=async function (username,password){
    const org=await this.findOne({username});
    if(org){
      const auth= await  bcrypt.compare(password,org.password);
    
      if(auth){
        return org;
      }
      throw Error('Incorrect password');
    }
    throw Error('incorrect username')
    ;
    }
    



const Organisation=mongoose.model('Organisation',orgSchema);



module.exports = Organisation;


