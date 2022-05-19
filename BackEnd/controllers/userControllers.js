const usersSchema = require('../models/usersSchema');
const registerUser= async (req,res)=>{
    let usersData;
    try{
        usersData = await usersSchema.findOne({walletAddress:req.params.accountAddress});
    }catch(err){
        return res.status(500).send(err);
    }
    if(usersData){
        return res.status(200).send('This wallet address already exists');
    }
    else{
        const user= new usersSchema({
            email:req.params.email,
            name:req.params.name,
            walletAddress:req.params.accountAddress
        });
        try{
            const savedUser= await user.save();
            return res.status(200).send('User Registrered');
        }catch(err){
            return res.status(500).send(err);
        }
    }
}
module.exports={
    registerUser,
}