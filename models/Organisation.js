import mongoose from 'mongoose';



const regUsers=mongoose.Schema({
    

        fullname:{
            type:String,
        },
        category:{
            type:String,

        },
        dateOfIssue:{
            type:Date,

        },
    issuedBy:{
        type:String,

        },

    hashPass:{
        type:String
    }

    
    
})


const orgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        sparse: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        minlength: 3,
        unique: true,
        sparse: true
    },
    regestiredUsers: [regUsers]
});

orgSchema.methods.addRegisteredUser = async function (user) {
    const existingUser = this.regestiredUsers.find(u => u.useremail === user.useremail);
    if (existingUser) {
        throw new Error('Duplicate user email');
    }
    this.regestiredUsers.push(user);
    await this.save();
};


const Organisation=mongoose.model('Organisation',orgSchema);



export default Organisation;


