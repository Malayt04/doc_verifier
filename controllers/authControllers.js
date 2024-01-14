import Organisation from '../models/Organisation.js';
import User from '../models/User.js';
import { handelError } from '../utils/handleError.js';
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

const secretKey = process.env.SECRET_KEY;

export const orgSignUp=async(req,res,next)=>{
   const {name,username,email,password}=req.body;
   const hashedPassword=bcryptjs.hashSync(password,10);
   const newOrg=new Organisation({name,username,email,password:hashedPassword});
   try {
    await newOrg.save();
    res.status(201).json("user created successfully");
   } catch (error) {
    next(error);
   }
}

export const orgSignIn=async(req,res,next)=>{
   const {username,password}=req.body();
   try {
      const validOrg=Organisation.findOne({email});
      if(!validOrg){
        return handelError(404,"User not found");
      }
      const validPassword=bcryptjs.compareSync(password,validOrg.password);
      if(!validPassword){
         handelError(401,"Wrong password");
      }
      const token=jwt.sign({id:validOrg._id},secretKey);
      const {password:pass, otherInfo}=validOrg;
      res.cookie('access_token',token,{httpOnly:true,expires:new Date(Date.now()+24*60*60*1000).status(200).json(otherInfo)
      });
   } catch (error) {
      next(error);
   }
}

export const userSignUp=async(req,res,next)=>{
   const {name,email, password, username}=req.body;
   const hashedPassword=bcryptjs.hashSync(password,10);
   const newUser=new User({name,email,username,password:hashedPassword});
   try {
      await newUser.save();
      res.status(201).json(newUser);
   } catch (error) {
      next(error);
   }
}

export const userSignIn=async(req,res,next)=>{
   const {email,password}=req.body;
   try {
      const validUser=await User.findOne({email});
      if(!validUser){
         handelError(404,"User not found");
      }
      const validPassword=bcryptjs.compareSync(password,validUser.password);
      if(!validPassword){
         handelError(400,"Invalid credintials");
      }
      const token=jwt.sign({id:validOrg._id},secretKey);
      const {password:pass, otherInfo}=validOrg;
      res.cookie('access_token',token,{httpOnly:true,expires:new Date(Date.now()+24*60*60*1000)}.status(200).json(otherInfo))
   } catch (error) {
      next(error);
   }
}