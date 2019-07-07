const generate2D = () => {
  let arr = new Array(8);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(8);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0; // 0 - empty, 1 - empty shot, 2 boat, 3 - found boat
    }
  }
  return arr;
};

let boardA = generate2D();
let boardB = generate2D();

const getA = (req, res) => {
  res.render('./../views/board', {board: boardA});
};

const getB = (req, res) => {
  res.render('./../views/board', {board: boardB});
};

const shotA = (req, res) => {
  let x = req.body.x;
  let y = req.body.y;
  if (x >= 0 && x < boardA.length & y >= 0 && y < boardA[0].length) {
    boardA[x][y] += 1;
    res.send('ok');
  } else {
    res.send('Error');
  }
};

const shotB = (req, res) => {
  let x = req.body.x;
  let y = req.body.y;
  if (x >= 0 && x < boardB.length & y >= 0 && y < boardB[0].length) {
    boardB[x][y] += 1;
    res.send('ok');
  } else {
    res.send('Error');
  }
};

const updateA = (req, res) => {
  boardA = [];
  let items = req.body.data;
  let i = 0;
  while(i < items.length) {
    boardA.push([]);
    for (let key in items[i].fields) {
      boardA[boardA.length - 1].push(items[i].fields[key]);
    }
    i++;
  }
};

const updateB = (req, res) => {
  boardB = [];
  let items = req.body.data;
  let i = 0;
  while(i < items.length) {
    boardB.push([]);
    for (let key in items[i].fields) {
      boardB[boardB.length - 1].push(items[i].fields[key]);
    }
    i++;
  }
};

module.exports = {
  getA, 
  getB, 
  shotA, 
  shotB, 
  updateA, 
  updateB
};
