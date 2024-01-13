import express from 'express';
import {orgSignUp,orgSignIn} from '../controllers/authControllers.js';
const router=express.Router();

router.route('/org/signup').post(orgSignUp);
router.route('/org/signin').post(orgSignIn);

export default router;