const express=require("express");
const connect_DB=require("./config/connect_DB")
const userRoutes = require('./Routes/auth');


const { Register } = require("./controllers/authController");
const postRoutes = require("./Routes/post");
const chatRoutes = require("./Routes/message");
const app = express();
app.use(express.json());

 connect_DB()
const port=5000;
 

app.use('/api/users',userRoutes);
app.use('/api/post',postRoutes);
app.use('/api/chat',chatRoutes);



app.listen(port,()=>console.log(`Server is running on port ${port}`));