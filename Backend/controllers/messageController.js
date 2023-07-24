const post = require('../models/Post');
const message = require('../models/message');
const user = require('../models/user');

//---------------ADD NEW MESSAGE--------------//
exports.AddMessage = async (req, res) => {
  
  try {
    const newmessage = new message(req.body); 
    const sender = await user.findById(req.params.id)
    if(!sender)
    {
      res.status(400).send({ msg: "no msg added"});
    }
    newmessage.sender =req.params.id
    const receiver = await user.findById(req.params.id2)
    if(!receiver)
    {
      res.status(400).send({ msg: "no msg added"});
    }
    newmessage.receiver  = req.params.id2
    
    res.status(200).send({ msg: "msg added", newmessage });
  } catch (error) {
    console.log(error)
    res.status(500).send("couldn't add msg");
  }
};
  //---------------GET ALL MESSAGES--------------//
exports.Getmessages = async (req, res) => {
  
    try {
      const getmessages = await message.find().populate('sender','receiver')
      
      res.status(200).send({ msg: "all msgs", getmessages });
    } catch (error) {
      res.status(500).send("couldn't get msgs ");
    }
  };