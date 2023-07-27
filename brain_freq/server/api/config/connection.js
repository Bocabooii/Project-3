const mongoose = require('mongoose');

// const MONGODB_URI = 'mongodb+srv://felixibikunle:fktU4pE6i9YuOo1r@cluster0.v2bxkkr.mongodb.net/?ssl=true'
// mongoose.connect(MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/brain_freq');

module.exports = mongoose.connection;
