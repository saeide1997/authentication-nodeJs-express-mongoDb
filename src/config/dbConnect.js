const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const dbConnect = async () => {
    const connect = await mongoose.connect(
        process.env.MONGO_URL
    ).then(() => console.log("Connect"))
        .catch((err) => {
            console.log(err);
    });
}



module.exports = dbConnect