import Organisation from '../models/Organisation.js';
import { handelError } from '../utils/handleError.js';
import bcryptjs from 'bcryptjs';

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
      res.cookie('access_token',token,{httpOnly:true,expires:new Date(Date.now()+24*60*60*1000).status(200).json(userInfo)
      });
   } catch (error) {
      next(error);
   }
}