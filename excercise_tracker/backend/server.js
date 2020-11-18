const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose')

const excercisesRouter = require('./routes/excercises');
const usersRouter = require('./routes/users');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDb connected")
});



app.use(excercisesRouter);
app.use(usersRouter)


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})