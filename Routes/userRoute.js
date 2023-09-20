const express=require('express');
const {getUserIssueForm,userDashboard,getUserHistory} = require('../controllers/userController');
const router=express.Router();

router.route('/:id').get(userDashboard);
router.route('/:id/issue-certificate').get(getUserIssueForm);
router.route('/:id/history').get(getUserHistory);


module.exports = router;