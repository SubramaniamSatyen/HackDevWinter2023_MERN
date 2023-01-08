const mongoose = require('mongoose');

const vote = new mongoose.Schema(
    {
        poll: {
            type: String,
            required: true
        },
        vote: {
            type: String,
            required: true
        }
    },    
    { 
        timestamps: true 
    }
);

module.exports = mongoose.model('Vote', vote);