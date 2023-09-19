const  Organisation=require('../models/Organisation');
const  User=require('../models/User');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const handleError=require('../errorhandler/errorhandler');




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
      res.status(200).json({org:org._id});
    } catch (error) {
        const err = handleError(error);
        res.status(400).json({err})
    }
}


const postSignUpPage=async(req,res)=>{
    const {name,email,username,password}=req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const org=new Organisation({name,email,username,password:hashedPass});
    try {
        await org.save();
        console.log(org);
        res.status(200).json({org});
    } catch (error) {
        const err = handleError(error);
        res.status(400).json({err})
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
      res.status(200).json({ user: user._id });
    } catch (error) {
        const err = handleError(error);
        res.status(400).json({err})
    }
  };
  
const postUserSignUpPage=async (req,res)=>{
    const {firstName,lastName,email,username,password}=req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const user=new User({firstName,lastName,email,username,password:hashedPass});
    try {
        await user.save();
        console.log(user);
        res.status(200).json({user});
    } catch (error) {
        const err = handleError(error);
        res.status(400).json({err})
    }
}




module.exports ={ getSignUpPage,postSignUpPage,getLoginPage,postLoginPage, getUserSignUpPage,postUserSignUpPage,getUserLoginPage,postUserLoginPage};