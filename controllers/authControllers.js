import Organisation from '../models/Organisation.js';
import { handelError } from '../utils/handleError.js';
import bcrypt from 'bcrypt';

export const orgSignIn=async(req,res)=>{
   const {name,username,email,password}=req.body;
  
}