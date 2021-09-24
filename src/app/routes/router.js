const path = require('path');
const albumDigitalRoutes = require('./albumDigitalRoutes');

module.exports = (app) => {
  app.get('/', (request, response) => {
    response.render('home');
  });

  app.use(albumDigitalRoutes);
};