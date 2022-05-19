const adminSchema = require('../models/adminSchema');
const loginAdmin= async (req,res)=>{
    let adminData;
    try{
        console.log("address :",req.params.accountAddress);
        adminData = await adminSchema.findOne({email:req.params.email});
        
        // console.log('adminData :',adminData)
        
    }catch(err){
        // res.send(adminData);
        // return res.status(500).send(err);
    }
    if(adminData){
        return res.status(200).send('login Successfull');
    }
    else{
        res.status(404).send('login Unsuccessfull');
    }
}
module.exports={
    loginAdmin,
}