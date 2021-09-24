const { album_digital } = require('../../models');

class AlbumDigitalController {
  static async insertAlbumDigital(request, response){
    const dataAlbumDigital = Object.fromEntries(Object.entries(request.body).map(([key, value]) => {
      if((key === 'cpf' || key === 'cpf_responsavel') && value == ''){
        return [key, null];
      } else {
        return [key, value];
      }
    }));
    const nome_foto = request.file.originalname;

    try{
      const newAlbumDigital = await album_digital.create({...dataAlbumDigital, nome_foto});
      return response.redirect('/album_form');
    } catch(error){
      return response.status(500).json(error);
    }
  }
}

module.exports = AlbumDigitalController;