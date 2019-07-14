let supertest = require('supertest');
let should = require('should');
let request = require('http').request();

// This agent refers to PORT where program is runninng.

let server = supertest.agent('http://localhost:3000');

describe('Board A get test', function () {
  it('should return A player board', function (done) {
    // calling home page api
    server
      .get('/boards/playerA')
      .expect('Content-type', /json/)
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
      // HTTP status should be 200
        res.status.should.equal(200);
        done();
      });
  });
});

describe('Board B get test', function () {
  it('should return B player board', function (done) {
    // calling home page api
    server
      .get('/boards/playerB')
      .expect('Content-type', /json/)
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
      // HTTP status should be 200
        res.status.should.equal(200);
        done();
      });
  });
});

describe('Board B PUT test', () => {
  it('should update Board B', (done) => {
    server
      .put('/boards/playerB')
      .send({
        'A': {
          '1': 2,
          '2': 0,
          '3': 2,
          '4': 0,
          '5': 0,
          '6': 0,
          '7': 0,
          '8': 0,
          '9': 0,
          '10': 2
        },
        'B': {
          '1': 2,
          '2': 0,
          '3': 2,
          '4': 0,
          '5': 2,
          '6': 2,
          '7': 2,
          '8': 0,
          '9': 0,
          '10': 2
        },
        'C': {
          '1': 2,
          '2': 0,
          '3': 0,
          '4': 0,
          '5': 0,
          '6': 0,
          '7': 0,
          '8': 0,
          '9': 0,
          '10': 0
        },
        'D': {
          '1': 2,
          '2': 0,
          '3': 0,
          '4': 0,
          '5': 0,
          '6': 0,
          '7': 0,
          '8': 0,
          '9': 0,
          '10': 0
        },
        'E': {
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 2,
          '5': 0,
          '6': 0,
          '7': 0,
          '8': 0,
          '9': 0,
          '10': 2
        },
        'F': {
          '1': 0,
          '2': 2,
          '3': 0,
          '4': 2,
          '5': 0,
          '6': 0,
          '7': 0,
          '8': 0,
          '9': 0,
          '10': 2
        },
        'G': {
          '1': 0,
          '2': 2,
          '3': 0,
          '4': 0,
          '5': 0,
          '6': 0,
          '7': 0,
          '8': 0,
          '9': 0,
          '10': 2
        },
        'H': {
          '1': 0,
          '2': 2,
          '3': 0,
          '4': 2,
          '5': 2,
          '6': 2,
          '7': 2,
          '8': 2,
          '9': 0,
          '10': 0
        },
        'I': {
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 0,
          '5': 0,
          '6': 0,
          '7': 0,
          '8': 0,
          '9': 0,
          '10': 0
        },
        'J': {
          '1': 2,
          '2': 2,
          '3': 2,
          '4': 2,
          '5': 0,
          '6': 0,
          '7': 0,
          '8': 2,
          '9': 2,
          '10': 0
        }
      })
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        console.log(res.body);
        done();
      });
  });
});

describe('Board A PUT test', () => {
  it('should update Board A', (done) => {
    server
      .put('/boards/playerA')
      .send({
        'A': {
          '1': 2,
          '2': 0,
          '3': 2,
          '4': 0,
          '5': 0,
          '6': 0,
          '7': 0,
          '8': 0,
          '9': 0,
          '10': 2
        },
        'B': {
          '1': 2,
          '2': 0,
          '3': 2,
          '4': 0,
          '5': 2,
          '6': 2,
          '7': 2,
          '8': 0,
          '9': 0,
          '10': 2
        },
        'C': {
          '1': 2,
          '2': 0,
          '3': 0,
          '4': 0,
          '5': 0,
          '6': 0,
          '7': 0,
          '8': 0,
          '9': 0,
          '10': 0
        },
        'D': {
          '1': 2,
          '2': 0,
          '3': 0,
          '4': 0,
          '5': 0,
          '6': 0,
          '7': 0,
          '8': 0,
          '9': 0,
          '10': 0
        },
        'E': {
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 2,
          '5': 0,
          '6': 0,
          '7': 0,
          '8': 0,
          '9': 0,
          '10': 2
        },
        'F': {
          '1': 0,
          '2': 2,
          '3': 0,
          '4': 2,
          '5': 0,
          '6': 0,
          '7': 0,
          '8': 0,
          '9': 0,
          '10': 2
        },
        'G': {
          '1': 0,
          '2': 2,
          '3': 0,
          '4': 0,
          '5': 0,
          '6': 0,
          '7': 0,
          '8': 0,
          '9': 0,
          '10': 2
        },
        'H': {
          '1': 0,
          '2': 2,
          '3': 0,
          '4': 2,
          '5': 2,
          '6': 2,
          '7': 2,
          '8': 2,
          '9': 0,
          '10': 0
        },
        'I': {
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 0,
          '5': 0,
          '6': 0,
          '7': 0,
          '8': 0,
          '9': 0,
          '10': 0
        },
        'J': {
          '1': 2,
          '2': 2,
          '3': 2,
          '4': 2,
          '5': 0,
          '6': 0,
          '7': 0,
          '8': 2,
          '9': 2,
          '10': 0
        }
      })
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        console.log(res.body);
        done();
      });
  });
});

describe('Board A shot test', () => {
  it('should return found', (done) => {
    server
      .post('/boards/playerA/shoot')
      .send({ x: 0, y: 0 })
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        res.body.result.should.equal('Found');
        done();
      });
  });
});

describe('Board B shot test', () => {
  it('should return found', (done) => {
    server
      .post('/boards/playerB/shoot')
      .send({ x: 0, y: 0 })
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        res.body.result.should.equal('Found');
        done();
      });
  });
});
