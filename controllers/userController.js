const userDashboard = (req,res)=>{
    const id=req.params.id;
    res.send(id);
}

const getUserIssueForm=(req,res)=>{
      res.send('user issue form');
}


const getUserHistory=(req,res)=>{
    res.send('user history form');
}

module.exports ={getUserIssueForm,userDashboard,getUserHistory};