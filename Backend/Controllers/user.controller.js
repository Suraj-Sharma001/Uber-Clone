import User from './../Models/user.model.js'

const registerUser = async (req, res) => {
    try {
        const {fullName, email, password} = req.body

        if(!email || !password || !fullName) {
            return res.status(400).json({ 
                message: "All fields are required",
                success: false
            })
        }

        const isUserExist = await User.findOne({email})

        if(isUserExist) {
            return res.status(400).json({
                message: "User already exist",
                success: false
            })
        }

        const hashPassword = await User.hashPassword(password)

        await User.create({
            fullName,
            email,
            password: hashPassword
        })
        
        res.status(201).json({
            message: "User created successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}

export default registerUser