import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full Name is required"],
        trim: true
    }, 
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    },
    socketId: {
        type: String
    }
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
}

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10)
}

const User = mongoose.model("User", userSchema)

export default User