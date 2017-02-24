console.log("Routes ready to do some work sonnnnnn");

var surveyController = require('../controllers/surveyController');

module.exports = function (app){
  app.post('/user', surveyController.login),
  app.get('/dashboard', surveyController.dashboard),
  app.post('/question', surveyController.createQuestion),
  app.get('/question/:id', surveyController.showOneQuestion),
  app.put('/vote', surveyController.addVote),
  app.delete('/question/:id', surveyController.deleteQuestion)
}
