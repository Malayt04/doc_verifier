const  Organisation=require('../models/Organisation');

const orgDashboard = (req,res)=>{
    const id=res.params.id;
    res.send(id);
}

const getIssueForm=(req,res)=>{
    res.send('form');
}

const postIssueForm=async (req,res)=>{
    const id = req.params.id;
  const {registeredUsers} = req.body;

  try {
    const organisation=new Organisation({id});

    if (!organisation) {
      return res.status(404).json({ error: 'Organisation not found' });
    }

    // Push the user data to the registeredUsers array
    organisation[registeredUsers].save({registeredUsers});
    res.status(200).json({ organisation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
    }

module.exports={orgDashboard,getIssueForm,postIssueForm}