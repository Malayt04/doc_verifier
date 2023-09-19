const express=require('express');
const {orgDashboard,getIssueForm,postIssueForm} = require('../controllers/orgControllers');

const router=express.Router();

router.route('/org/:id').get(orgDashboard);
router.route('/:id/issue-certificate').get(getIssueForm).post(postIssueForm);

module.exports=router;
