const express = require("express");
const users = express.Router();
const usersController = require("../controllers/userControllers");

users.post('/api/login/:email/:name/:accountAddress',usersController.registerUser);


module.exports=users;