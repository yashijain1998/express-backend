const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const itemRouter = require('./router/itemRouter');
const PORT = process.env.PORT || 3000;

//mongodb connection 
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true})
.then(() => console.log("connection is successfull"))
.catch((error) => console.log(error));

const app = express();
app.use(cors());
app.use(express.json());
app.use(itemRouter);


app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
