const { default: mongoose } = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.kcajw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
            // useCreateIndex: true, Not supported
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false Not supported
        })

        console.log('Mongoose Db connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDB