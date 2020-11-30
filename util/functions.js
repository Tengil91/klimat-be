const User = require('../models/user').User;

module.exports.test = function test(req, res, next){
  next();
}

module.exports.createTestJson = function createTestJson(req, res, next){
  req.user = {name: 'tengil'};
  next();
}

module.exports.gogogo = function gogogo(req, res, next){
  res.send(req.user);
}

module.exports.validateName = function validateName(req, res, next){
  console.log('in function: validateName');
  if(req.body.name && req.body.name.length > 0){
    next();
  } else {
    return res.json({error: 404});
  }
}

module.exports.validatePassword = function validatePassword(req, res, next){
  if(req.body.password && req.body.password.length > 0){
    next();
  } else {
    return res.json({error: 404});
  }
}

module.exports.validateLoginToken = function validateLoginToken(req, res, next){
  if(req.body.loginToken && req.body.loginToken.length > 0){
    next();
  } else {
    return res.json({error: 404});
  }
}

module.exports.validateUser = async function validateUser(req, res, next){
  await User.find({name: req.body.name}).then(result => {
    if(result && result.length > 0){
      if((req.body.token && req.body.token === result[0].token) || (req.body.password && req.body.password === result[0].password)){
        req.validated = true;
        req.user = result[0];
        next();
      }
    } else {
      return res.json({error: 403});
    }
  });
}

module.exports.returnUserData = function returnUserData(req, res, next){
  res.json(req.user);
}

module.exports.checkIfUserExists = async function checkIfUserExists(req, res, next){
  await User.find({name: req.body.name}).then(result => {
    console.log(result);
    if(result && result.length > 0){
      return res.json({error: 404});
    } else {
      next();
    }
  });
}

module.exports.registerNewUser = function registerNewUser(req, res, next){
  console.log('in function: registerNewUser');
  const user = new User({
    name: req.body.name,
    password: req.body.password,
    token: Math.floor(Math.random()*100000000),
  });
  user.save().then(result => {
    console.log(result)
    res.json(result);
    
  }).catch(err => {
    res.json({error: 404});
    
  });
}

module.exports.getUsers = function getUsers(req, res, next){
  User.find({}).then(result => {
    res.json({users: result});
  });
}

module.exports.getUser = function getUser(req, res, next){
  User.findById(req.params.id).then(result => {
    res.json({users: result});
  });
}