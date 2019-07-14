const board = require('../models/board');

const generate2D = () => {
  let arr = new Array(10);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(10);
  }
  return arr;
};

const fill2D = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0; // 0 - empty, 1 - empty shot, 2 boat, 3 - found boat
    }
  }
  return arr;
};

const toString = (board) => {
  let out = '';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      out += board[i][j];
    }
  }
  return out;
};

let boardA = fill2D(generate2D());
let boardB = fill2D(generate2D());

const getA = (req, res) => {
  board.Board.find().where('playerName').equals('playerA1').exec((err, brd) => {
    if (err) {
      console.log(err);
    }
    if (brd.length === 0) {
      console.log('Empty');
      let instance = new board.Board({ playerName: 'playerA1', boardString: toString(boardA) });
      instance.save((err) => {
        if (err) {
          console.log(err);
        }
      });
    } else { // Load board from DB
      boardA = fill2D(generate2D());
      let index = 0;
      for (let i = 0; i < boardA.length; i++) {
        for (let j = 0; j < boardA[0].length; j++) {
          boardA[i][j] = parseInt(brd[0].boardString[index++]);
        }
      }
      // boardB = json.parse(brd[0].boardString);
    }
  });
  res.json(boardA);
};

const getB = (req, res) => {
  board.Board.find().where('playerName').equals('playerB1').exec((err, brd) => {
    if (err) {
      console.log(err);
    }
    if (brd.length === 0) { // Board not exist in DB
      console.log('Empty');
      let instance = new board.Board({ playerName: 'playerB1', boardString: toString(boardB) });
      instance.save((err) => {
        if (err) {
          console.log(err);
        }
      });
      res.json(boardB);
    } else { // Load board from DB
      boardB = fill2D(generate2D());
      let index = 0;
      for (let i = 0; i < boardB.length; i++) {
        for (let j = 0; j < boardB[0].length; j++) {
          boardB[i][j] = parseInt(brd[0].boardString[index++]);
        }
      }
      // boardB = json.parse(brd[0].boardString);
      res.json(boardB);
    }
  });
};

const shotA = (req, res) => {
  let x = req.body.x;
  let y = req.body.y;
  if (x >= 0 && x < boardA.length & y >= 0 && y < boardA[0].length) {
    if (boardA[x][y] === 0) {
      boardA[x][y]++;
      res.json({ result: 'Not found' });
    } else if (boardA[x][y] === 2) {
      boardA[x][y]++;
      res.json({ result: 'Found' });
    } else {
      res.json({ result: 'Error' });
    }
    board.Board.findOne({ playerName: 'playerA1' }, (err, brd) => {
      if (err) {
        console.log(err);
      }
      brd.boardString = toString(boardA);
      brd.save();
    });
  } else {
    res.json({ result: 'Error' });
  }
};

const shotB = (req, res) => {
  let x = req.body.x;
  let y = req.body.y;
  if (x >= 0 && x < boardB.length & y >= 0 && y < boardB[0].length) {
    if (boardB[x][y] === 0) {
      boardB[x][y]++;
      res.json({ result: 'Not found' });
    } else if (boardB[x][y] === 2) {
      boardB[x][y]++;
      res.json({ result: 'Found' });
    } else {
      res.json({ result: 'Error' });
    }
    board.Board.findOne({ playerName: 'playerB1' }, (err, brd) => {
      if (err) {
        console.log(err);
      }
      brd.boardString = toString(boardB);
      brd.save();
    });
  } else {
    res.json({ result: 'Error' });
  }
};

const updateA = (req, res) => {
  boardA = generate2D();
  let js = req.body;
  let x = 0;
  let y = 0;
  Object.keys(js).forEach(function (key) {
    Object.keys(js[key]).forEach(function (val) {
      boardA[x++][y] = js[key][val];
    });
    y++;
    x = 0;
  });
  console.log(boardA);
  res.json(boardA);
};

const updateB = (req, res) => {
  boardB = generate2D();
  let js = req.body;
  let x = 0;
  let y = 0;
  Object.keys(js).forEach(function (key) {
    Object.keys(js[key]).forEach(function (val) {
      boardB[x++][y] = js[key][val];
    });
    y++;
    x = 0;
  });
  console.log(boardB);
  res.send(boardB);
};

module.exports = {
  getA,
  getB,
  shotA,
  shotB,
  updateA,
  updateB
};
