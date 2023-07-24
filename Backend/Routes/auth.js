const express = require ('express');
const { Register,Login ,current} = require('../controllers/authController');
const { Validationregister, Validation, Validationlogin } = require('../Middlewares/Validation');
const { IsAuth } = require('../Middlewares/IsAuth');
const { Getusers, Deleteuser, Updateuser, updateProfileImage } = require('../controllers/userController');
const { upload } = require('../Middlewares/upload');

const userRoutes = express.Router();

//--------AUTH--------//
// REGISTER
userRoutes.post('/register' , Validationregister, Validation,Register);
// LOGIN
userRoutes.post('/login' , Validationlogin, Validation ,Login);
//GET CURRENT USER
userRoutes.get('/current'  ,current );
//-------------USER------------//
// GET ALL USERS
userRoutes.get("/allusers" ,Getusers);
// DELETE USER
userRoutes.delete("/delete/:id",Deleteuser);
// UPDATE USER
userRoutes.put("/edit/:id" ,Updateuser);
// UPDATE PROFILE IMAGE
userRoutes.put('/uploadimage/:id',upload.single('profileImage') ,updateProfileImage)


module.exports = userRoutes;
