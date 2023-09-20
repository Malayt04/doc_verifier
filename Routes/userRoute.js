const express=require('express');
const {getUserIssueForm,userDashboard} = require('../controllers/userController');
const router=express.Router();

router.route('/:id').get(userDashboard);
router.route('/:id/issue-certificate').get(getUserIssueForm);

module.exports = router;