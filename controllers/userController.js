const userDashboard = (req,res)=>{
    const id=req.params.id;
    res.send(id);
}

const getUserIssueForm=(req,res)=>{
      res.send('user issue form');
}

module.exports ={getUserIssueForm,userDashboard};