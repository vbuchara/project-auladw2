require('dotenv').config();

const { usuario } = require('../../models');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');

class UsuarioController {
  static async insertUsuario(request, response){
    let dataUsuario = request.body;
    
    try{
      bcrypt.hash(dataUsuario.senha, 12, async function(err, hash) {
        dataUsuario = Object.fromEntries(Object.entries(dataUsuario).map(([key, value]) => {
          if(key === 'senha'){
            return ['senha_hash', hash];
          } else {
            return [key, value];
          }
        }));

        console.log(dataUsuario);
        await usuario.create(dataUsuario);
      });

      return response.redirect('/login');
    } catch(error){
      return response.status(500).json(error);
    }
  }

  static async login(request, response){ 
    const { login, senha } = request.body;

    try{
      const user = await usuario.findOne({ raw: true, where: { 
        [Op.or]: [
          { email: login },
          { nome: login }
        ]
      }});

      if(!user){
        throw new Error('Usuario não encontrado.');
      }

      bcrypt.compare(senha, user.senha_hash, function(err, result) {
        if(!result){
          return response.redirect('/login');
        } 
        const token = jwt.sign({ id: user.id }, process.env.JWT_KEY, { expiresIn: '60m' });
        response.set('Authorization', token);
        return response.redirect('/relatorio');
      });

    } catch(error){
      return response.redirect('/login');
    }
  }
}

module.exports = UsuarioController;