const mongoose = require("mongoose");
require('dotenv').config()

// const url = 'mongodb://0.0.0.0:27017/login-auth';
const URL = process.env.MONGO_URL;

mongoose.connect(URL)
.then(() => {
  console.log("Database Connected")
})
.catch((error) => console.log('This is errorrr...'+error));


