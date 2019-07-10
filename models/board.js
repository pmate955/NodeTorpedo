const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  playerName: {
    type: String,
    unique: true
  },
  boardString: {
    type: String
  }
});

const connectDb = () => {
  return mongoose.connect('mongodb://localhost:27017/node-express-mongodb-server');
};

let Board = mongoose.model('Board', boardSchema);
module.exports = { Board, connectDb };
