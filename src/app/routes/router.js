const path = require('path');

const albumDigitalRoutes = require('./albumDigitalRoutes');
const relatorioAlbumDigitalRoutes = require('./relatorioAlbumDigitalRoutes');
const usuarioRoutes = require('./usuarioRoutes');
const videos = require('./getLinks');

module.exports = (app) => {
  app.get('/', (request, response) => {
    response.render('home', { videos: videos, token: request.cookies.token });
  });

  app.use(albumDigitalRoutes);
  app.use(relatorioAlbumDigitalRoutes);
  app.use(usuarioRoutes);
};