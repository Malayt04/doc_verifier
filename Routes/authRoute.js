import express from 'express';
import {orgSignUp} from '../controllers/authControllers.js';
const router=express.Router();

router.route('/org/signup').post(orgSignUp);

export default router;