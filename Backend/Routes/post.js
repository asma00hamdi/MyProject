const express = require ('express');
const { Addpost, Getposts, Getpost, Updatepost, Deletepost } = require('../controllers/postController');
const { IsAuth } = require('../Middlewares/IsAuth');


const postRoutes = express.Router();

//--------POST--------//
// ADD POST
postRoutes.post('/addPost/:id' ,Addpost );
// GET ALL POSTS
postRoutes.get('/allposts' ,Getposts);
// GET ONE POST
postRoutes.get('/getpost/:id' ,Getpost);
// UPDATE POST
postRoutes.put('/editpost/:id',Updatepost);
// DELETE POST
postRoutes.delete('/deletepost/:id',Deletepost);


module.exports = postRoutes;