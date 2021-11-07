import mongoose from 'mongoose';
const initializeDb = () => {
    mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("connected to mongodb"))
        .catch(err => console.log(err))
}
export default initializeDb