const Vote = require("../models/Vote");

//Function to get all votes in database (through Mongoose API)
module.exports.getVotes = async (req, res) => {
    const votes = await Vote.find();
    res.send(votes);
}

//Function to save a new vote (through Mongoose API)
module.exports.createVote = async (req, res) => {
    const addedVote = await Vote.create(req.body);
    res.send(addedVote);
}