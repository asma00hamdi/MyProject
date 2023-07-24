const post = require('../models/Post');
const user = require('../models/user');

//---------------ADD NEW POST--------------//
exports.Addpost = async (req, res) => {
  const { title,body,contactUs } = req.body ;
  try {
    const newpost = new post(req.body); 
    const creator = await user.findById(req.params.id)
    if(!creator)
    {
      res.status(400).send({ msg: "no post added"});
    }
    newpost.creatorId  = req.params.id
    await newpost.save();
    res.status(200).send({ msg: "post added", newpost });
  } catch (error) {
    console.log(error)
    res.status(500).send("couldn't add post");
  }
};
  //---------------GET ALL POSTS--------------//
exports.Getposts = async (req, res) => {
  
    try {
      const getposts = await post.find().populate('creatorId')
      
      res.status(200).send({ msg: "all posts", getposts });
    } catch (error) {
      res.status(500).send("couldn't get posts ");
    }
  };
  //------------GET ONE POST ------------//
  exports.Getpost = async (req, res) => {
    try {
      const getpost = await post.findById(req.params.id).populate('creatorId','name')
      res.status(200).send({ msg: "get post", getpost });
    } catch (error) {
      res.status(500).send("couldn't get post ");
    }
      };
  //------------DELETE POST-------------//
  exports.Deletepost = async (req, res) => {
    try {
      
      const delepost = await post.findByIdAndDelete(req.params.id);
      res.status(200).send({ msg: "post deleted", delepost });
    } catch (error) {
      res.status(500).send("could not delete post");
    }
  };
  //-----------UPDATE POST-----------------//
  exports.Updatepost = async (req, res) => {
    try {
      const getposts  = await post.findByIdAndUpdate(
        req.params.id,
        {
          $set: {...req.body},
        },
        { new: true }
      );
      res.status(200).send({ msg: "post updated", getposts  });
    } catch (error) {
      res.status(500).send("couldn't update post");
    }
  };
 