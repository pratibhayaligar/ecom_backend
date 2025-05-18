const express = require("express");
const { registerUser } = require("../controllers/authController");
const { login } = require("../controllers/authController");
const { Logout } = require("../controllers/authController");
const authRoutes = express.Router();

authRoutes.post("/Register", registerUser);
authRoutes.post("/Login", login);
authRoutes.post("/Logout", Logout);

module.exports = authRoutes;
