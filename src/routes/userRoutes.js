const express = require("express")
const verifyToken = require("../middlewares/authMiddleware")
const authorizeRoles = require("../middlewares/roleMiddleware")
const router = express.Router()

//--Only Admin can access
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res)=>{
    res.json({ message: "welcome Admin"})
})

//--Both Admin and Manager can access
router.get("/manager",verifyToken, authorizeRoles("admin", "manager"), (req, res)=>{
    res.json({ message: "welcome manager"})
})

//--All Users can access
router.get("/user", verifyToken, authorizeRoles("admin", "manager", "user"), (req, res)=>{
    console.log(7777);
    res.json({ message: "welcome user"})
})

module.exports = router