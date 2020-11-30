const utils = require('../util/functions');

module.exports = function addRoutes(app){
  app.get('/test', [utils.test, utils.createTestJson, utils.gogogo]);

  app.post('/register', [utils.validateName, utils.validatePassword, utils.checkIfUserExists, utils.registerNewUser]);

  app.post('/login', [utils.validateName, utils.validateUser, utils.returnUserData]);

  app.get('/user', [utils.getUsers]);
  app.get('/user/:id', [utils.getUser]);
}