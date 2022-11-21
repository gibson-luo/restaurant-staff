require('dotenv').config()
const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;

// connect mongodb

mongoose.connect(MONGO_URL);
const conn = mongoose.connection;
conn.on('connected', console.log.bind(console, 'MongoDb connected'))
conn.on('error', console.error.bind(console, 'MongoDb connection error'));

module.exports = mongoose;
