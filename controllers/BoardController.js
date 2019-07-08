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
};

let boardA = fill2D(generate2D());
let boardB = fill2D(generate2D());

const getA = (req, res) => {
  res.render('./../views/board', { board: boardA, title: 'Player A board' });
};

const getB = (req, res) => {
  res.render('./../views/board', { board: boardB, title: 'Player B board' });
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
  // console.log(JSON.stringify(req.body));
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
  res.send('OK');
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
  res.send('OK');
};

module.exports = {
  getA,
  getB,
  shotA,
  shotB,
  updateA,
  updateB
};
