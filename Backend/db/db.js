import mongoose from 'mongoose'

const db =  async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI || "")
        console.log('database connected successfully')
    } catch (error) {
            console.log('Error connection to database')
            console.log(error)
    }
}

export default db