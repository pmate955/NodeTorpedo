let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/boards/playerA', (req, res) => {
  res.send('a játékos táblája');
});

app.get('/boards/playerB', (req, res) => {
  res.send('a játékos táblája');
});

app.post('/boards/playerA/shoot', function (req, res) {
  res.send('A shoot to ' + req.body.x + ' ' + req.body.y);
});

app.post('/boards/playerB/shoot', (req, res) => {
  res.send('B shoot to ' + req.body.x + ' ' + req.body.y);
});

app.put('/boards/playerA', (req, res) => {
  res.send('A changed');
});

app.put('/boards/playerB', (req, res) => {
  res.send('B changed');
});

app.listen(3000);
