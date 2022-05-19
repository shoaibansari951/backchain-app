const express = require("express");
const adminRoutes = express.Router();
const adminControllers = require("../controllers/adminControllers");

adminRoutes.post('/api/admin-login/:email/:accountAddress',adminControllers.loginAdmin);


module.exports=adminRoutes;