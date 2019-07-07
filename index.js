let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let board = require('./controllers/BoardController');

app.set('view engine', 'jade');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/boards/playerA', board.getA);

app.get('/boards/playerB', board.getB);

app.post('/boards/playerA/shoot', board.shotA);

app.post('/boards/playerB/shoot', board.shotB);

app.put('/boards/playerA', board.updateA);

app.put('/boards/playerB', board.updateB);

app.listen(3000);
