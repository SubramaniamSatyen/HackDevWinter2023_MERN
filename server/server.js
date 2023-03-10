const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

//Initializing routers
const routes = require("./routes/VoteRoute");

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to db..."))
    .catch((err) => console.error(err));

//Using routers
app.use(routes);

//Listening on preconfigured port for requests
app.listen(PORT, () => console.log("Server running on port " + PORT));
