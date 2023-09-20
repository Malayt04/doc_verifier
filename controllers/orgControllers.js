const  Organisation=require('../models/Organisation');

const orgDashboard = (req,res)=>{
  const id=req.params.id;
  res.send(id);
}

const getIssueForm=(req,res)=>{
    res.send('form');
}


const postIssueForm = async (req, res) => {
  const { id } = req.params;
  const userData = req.body;

  try {
    const organisation = await Organisation.findById(id);

    if (!organisation) {
      return res.status(404).json({ error: 'Organisation not found' });
    }

  
    organisation.regestiredUsers.push(userData);
    await organisation.save();

    res.status(200).json({ organisation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


module.exports={orgDashboard,getIssueForm,postIssueForm}