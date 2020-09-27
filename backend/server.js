const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
require('dotenv').config();
const port  = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true},{ useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open',() =>{
	console.log("Mongo database connection established successfully!")
})

app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);

app.listen(port,()=>{
	console.log(`Server is listening on port:${port}`);
});