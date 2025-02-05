import express from "express"
const router = express.Router()
import { body } from "express-validator" // it is used to validate the body
import registerUser from "./../Controllers/user.controller.js"

router.post(
  "/register",
  [ 
    body("email").isEmail().withMessage("Email is not valid"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("fullName")
        .isLength({ min: 3 })
        .withMessage("Full Name must be at least 3 characters long"),
  ],
  registerUser 
)

export default router
