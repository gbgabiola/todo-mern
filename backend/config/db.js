const mongoose = require('mongoose');

const db = process.env.DB_URL || 'mongodb://localhost:27017/todo';
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('Database connected!');
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
