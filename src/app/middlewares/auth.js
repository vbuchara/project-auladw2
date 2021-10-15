require('dotenv').config();

const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
  const token = request.headers["x-access-token"];
  jwt.verify(token, process.env.JWT_KEY, (error, decode) => {
    if(error){
      return response.redirect('/login');
    }

    next();
  });
};