const express = require("express");
const Jackpot = express.Router();
const jackpotControllers = require("../controllers/jackpotControllers");

Jackpot.post('/api/jackpot/:jackPotId/:name',jackpotControllers.createJackpot);


module.exports=Jackpot;