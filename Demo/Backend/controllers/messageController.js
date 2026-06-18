const Message = require("../models/Message");

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, text } = req.body;

    const newMessage = await Message.create({
      senderId,
      receiverId,
      text,
    });

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMessages,
  sendMessage,
};