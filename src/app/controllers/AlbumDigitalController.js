const { album_digital } = require('../../models');
const { Op } = require('sequelize');

class AlbumDigitalController {
  static async insertAlbumDigital(request, response){
    const dataAlbumDigital = Object.fromEntries(Object.entries(request.body).map(([key, value]) => {
      if((key === 'cpf' || key === 'cpf_responsavel') && value == ''){
        return [key, null];
      } else {
        return [key, value];
      }
    }));
    const nome_foto = request.file.filename;
    const estado = 'MS';

    try{
      await album_digital.create({...dataAlbumDigital, nome_foto, estado});
      return response.redirect('/album_form');
    } catch(error){
      return response.status(500).json(error);
    }
  }

  static async getAllAlbumDigital(request, response){ 
    try{
      const dataAllAlbumDigital = await album_digital.findAll();
      response.status(200).render('relatorio_album_digital', { data: dataAllAlbumDigital, token: request.cookies.token });
    } catch(error){
      return response.status(500).json(error);
    }
  }

  static async getFilteredAlbumDigital(request, response){
    const filter = request.query.filter;
    try{
      const dataAllAlbumDigital = await album_digital.findAll({
        where: {
          [Op.or]: [
            {
              nome: filter
            },
            {
              email: filter
            },
            {
              cidade: filter
            },
          ]
        }
      })

      return response.status(200).json(dataAllAlbumDigital);
    } catch(error){
      return response.status(500).json(error);
    }
  }
}

module.exports = AlbumDigitalController;