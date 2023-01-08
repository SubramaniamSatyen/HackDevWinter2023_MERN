const express = require("express");
const { getVotes, createVote } = require("../controllers/VoteController");

//Initializing router and connecting database endpoints to database functions
const router = express.Router();

router.get("/get-votes", getVotes);

router.post("/add-vote", createVote);

module.exports = router;