var beltController = require('../controller/beltController');

module.exports = function (app){
  app.get('/index', boardController.index),
  app.post('/user', boardController.login),
}
