const express=require('express');
const{ getSignUpPage,postSignUpPage,getLoginPage,postLoginPage, getUserSignUpPage,postUserSignUpPage,getUserLoginPage,postUserLoginPage}=require('../controllers/authControllers');


const router=express.Router();

router.route('/register/org').get(getSignUpPage).post(postSignUpPage);
router.route('/register/user').get(getUserSignUpPage).post(postUserSignUpPage);
router.route('/login/org').get(getLoginPage).post(postLoginPage);
router.route('/login/user').get(getUserLoginPage).post(postUserLoginPage);

module.exports=router;
