const mongoose = require('mongoose');
const config = require('config');
//const db = config.get('mongoURI');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MY_MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
