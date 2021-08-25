const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Import router
const postRoute = require("./routes/routes");

app.use("/posts", postRoute);

//connect to db
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    ignoreUndefined: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to db!");
  }
);

//listen the server
app.listen(3000, () => console.log(`http://localhost:${3000}`));
