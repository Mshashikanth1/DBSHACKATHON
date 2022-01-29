const express=require("express")
const { signup, login, profile,stocks} = require("./Fetch")
const app=express()
const router=express.Router()


router.post("/Signup",signup)
router.post("/Login",login)
router.post("/Profile",profile)
router.post("/Book_stock",stocks)

module.exports=router