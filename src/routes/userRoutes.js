const express = require("express")
const verifyToken = require("../middlewares/authMiddleware")
const { verify } = require("jsonwebtoken")
const router = express.Router()

//--Only Admin can access
router.get("/admin", verifyToken, (req, res)=>{
    res.json({ message: "welcome Admin"})
})

//--Both Admin and Manager can access
router.get("/manager",(req, res)=>{
    res.json({ message: "welcome manager"})
})

//--All Users can access
router.get("/user",(req, res)=>{
    res.json({ message: "welcome user"})
})

module.exports = router