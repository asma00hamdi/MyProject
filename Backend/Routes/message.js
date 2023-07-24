const express = require ('express');
const { AddMessage, Getmessages } = require('../controllers/messageController');
// const { IsAuth } = require('../Middlewares/IsAuth');


const chatRoutes = express.Router();

//--------MESSAGE--------//
// ADD MESSAGE
chatRoutes.post('/addMsg/sender/:id/receiver/:id2' ,AddMessage );
// GET ALL MESSAGES
chatRoutes.get('/allMsgs' ,Getmessages);


module.exports = chatRoutes;
