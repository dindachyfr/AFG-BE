const express = require("express");
const userController = require("../controller/user"); //belom ada wkwkwk
const { protect } = require("../midware/authentication");

const route = express.Router();

route
    .post("/login", userController.loginUser)
    .post("/register", userController.registerUser)
    .get("/user/profile", protect, userController.getProfile) // profile redis redisMidware.hitCacheProfile
    
module.exports = route;
