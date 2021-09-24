const path = require('path');
const albumDigitalRoutes = require('./albumDigitalRoutes');
const relatorioAlbumDigitalRoutes = require('./relatorioAlbumDigitalRoutes');

module.exports = (app) => {
  app.get('/', (request, response) => {
    response.render('home');
  });

  app.use(albumDigitalRoutes);
  app.use(relatorioAlbumDigitalRoutes);
};