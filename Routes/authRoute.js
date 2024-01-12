import express from 'express';
import {orgSignIn} from '../controllers/authControllers.js';
const router=express.Router();

router.route('/org/signin').post(orgSignIn);

export default router;