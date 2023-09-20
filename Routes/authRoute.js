const express=require('express');
const{ getSignUpPage,postSignUpPage,getLoginPage,postLoginPage, getUserSignUpPage,postUserSignUpPage,getUserLoginPage,postUserLoginPage,getLogoutPage}=require('../controllers/authControllers');


const router=express.Router();

router.route('/signup_c.html').post(postSignUpPage);
router.route('/signup_u.html').post(postUserSignUpPage);
router.route('/login_c.html').post(postLoginPage);
router.route('/login_u.html').post(postUserLoginPage);
router.route('/logout').get(getLogoutPage);

module.exports=router;
