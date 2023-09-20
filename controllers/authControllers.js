const  Organisation=require('../models/Organisation');
const  User=require('../models/User');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');



const maxAge=3*24*60*60;


const createToken =(id)=>{
    return jwt.sign({id},'secret',{
        expiresIn:maxAge
    })
}





const handleUserError=(err)=>{
    console.log(err.message,err.code);
    let errors={firstName:'',lastName:'',email:'',username:'',password:''};

    if(err.message.includes('User validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message;
        });
    }

    if(err.message=='incorrect username'){
        errors.email='incorrect username';
    }
    if(err.message=='incorrect password'){
        errors.password='incorrect password';
    }

    if(err.code==11000){
        errors.email='That email already exists';
    }
    return errors;
}


const handleOrgError=(err)=>{
    console.log(err.message,err.code);
    let errors={name:'',email:'',username:'',password:''};

    if(err.message.includes('Organisation validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message;
        });
    }

    if(err.message=='incorrect username'){
        errors.email='incorrect username';
    }
    if(err.message=='incorrect password'){
        errors.password='incorrect password';
    }

    if(err.code==11000){
        errors.email='That email already exists';
    }
    return errors;
}






const getSignUpPage=(req,res)=>{
    res.send('signup');
}

const getLoginPage=(req,res)=>{
    res.send('login');
}

const postLoginPage=async(req,res)=>{
    const { username, password } = req.body;
    try {
      const org=await Organisation.login(username, password);
      const token=createToken(org._id);
      res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
      res.status(200).json({org:org._id});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const postSignUpPage = async (req, res) => {
    const { name, email, username, password } = req.body;
  
    try {
      const org=await Organisation.create({name, email, username, password});
      const token = createToken(org._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      console.log(org._id);
      res.status(200).json({ org:org._id});
    } catch (error) {
        const err=handleOrgError(error);
        res.status(500).json({err})
    }
  }
const getUserSignUpPage=(req,res)=>{
    res.send('signup');
}

const getUserLoginPage=(req,res)=>{
    res.send('login');
}


const postUserLoginPage = async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.login(username, password);
      const token=createToken(user._id);
      res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
      res.status(200).json({ user: user._id });
    } catch (error) {
        res.status(400).json({error:error.message});
    }
  };
  
const postUserSignUpPage=async (req,res)=>{
    const {firstName,lastName,email,username,password}=req.body;
    try {
        const user=await User.create({firstName,lastName,email,username,password});
        const token=createToken(user._id);
        res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
        console.log(user);
        res.status(200).json({user});
    } catch (error) {
      const err= handleUserError(error);
        res.status(500).json({err});
    }
}


const getLogoutPage=(req,res)=>{
    res.cookie('jwt','',{maxAge:1});
    res.redirect('/');
  }




module.exports ={ getSignUpPage,postSignUpPage,getLoginPage,postLoginPage, getUserSignUpPage,postUserSignUpPage,getUserLoginPage,postUserLoginPage,getLogoutPage};