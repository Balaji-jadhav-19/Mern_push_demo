const mongoose = require("mongoose")

const dbconnection = async (req,res) => {
    try {
        await mongoose.connect(process.env.URI)
        console.log("MongoDB Connected")
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message)

    }
}
module.exports=dbconnection