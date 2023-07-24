const mongoose = require('mongoose');
const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://assouma:asmahamdi123@cluster0.x3skqlo.mongodb.net")
        console.log('DB is connected...');
    } catch (error) {
        console.log('DB is not connected');
    }
}
module.exports = connectDB;