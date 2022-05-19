const jackpotSchema = require("../models/jackpot");
const moment = require('moment');

const createJackpot = async(req,res)=>{
    console.log('sadfasdfas')
    let lottery;
    try{
    lottery = await jackpotSchema.findOne().sort({'_id':-1}).limit(1);
    }catch(err){
        console.log(err);
    }
    console.log('lottery',lottery);
    if(lottery){
        var date01=moment(Date.now()).format('YYYY-MM-DD');
        console.log('date01',date01);
        console.log('date',lottery.date);
        if(lottery.date!=date01){
            console.log('Unmatched date');
            try{
                res.json({
                    message:'buttondisable',
                })
            }catch(err){
                return res.status(500).send(err);
            }
        }

        else {
            console.log('Matched date');
        try{
            const jackpot= new jackpotSchema({
                jackPotId:req.params.jackPotId,
                name:req.params.name,
                date:date01,
                participants:[],
            });
            try{
                const savedJackpot= await jackpot.save();
                 res.status(200).json({message:'buttonable'});
            }catch(err){
                return res.status(500).send(err);
            }
        }
        catch(err){
            return res.status(500).send(err);
        }    
    }
}
else{
    try{
        const jackpot= new jackpotSchema({
            jackPotId:req.params.jackPotId,
            name:req.params.name,
            date:date01,
            participants:[],
        });
        try{
            const savedJackpot= await jackpot.save();
            console.log('savedJackpot',savedJackpot);
             res.status(200).json({message:'buttondisable'});
        }catch(err){
            console.log('asdfsd' ,res.status(500).send(err));
        }
    }
    catch(err){
        console.log('error' ,res.status(500).send(err));
    }
}
}

module.exports={
    createJackpot,
}