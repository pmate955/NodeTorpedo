const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const boardController = require('./controllers/BoardController');
const db = require('./models/board');

app.set('view engine', 'jade');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/boards/playerA', boardController.getA);

app.get('/boards/playerB', boardController.getB);

app.post('/boards/playerA/shoot', boardController.shotA);

app.post('/boards/playerB/shoot', boardController.shotB);

app.put('/boards/playerA', boardController.updateA);

app.put('/boards/playerB', boardController.updateB);

db.connectDb().then(async () => {
  app.listen(3000);
}).catch((err) => {
  console.log(err);
});
