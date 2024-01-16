import express from 'express';
import {orgSignUp,orgSignIn,userSignIn,userSignUp} from '../controllers/authControllers.js';
const router=express.Router();

router.route('/org/signup').post(orgSignUp);
router.route('/org/signin').post(orgSignIn);
router.route('/user/signup').post(userSignUp);
router.route('/user/signin').post(userSignIn);

export default router;