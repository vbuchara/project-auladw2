const { Router } = require('express');
const multer = require('multer');
const path = require('path');

const AlbumDigitalController = require('../controllers/AlbumDigitalController');
const storage = require('../../config/multerStoreConfig');

const router = Router();
const upload = multer({ storage });


router.get('/album_form', (request, response) => {
  // response.sendFile(path.join(__dirname, '../../pages/html/album_form.html');
const cidades = [
  "Água Clara",
  "Alcinópolis",
  "Amambaí",
  "Anastácio",
  "Anaurilândia",
  "Angélica",
  "Antônio João",
  "Aparecida do Taboado",
  "Aquidauana",
  "Aral Moreira",
  "Bandeirantes",
  "Bataguassu",
  "Bataiporã",
  "Bela Vista",
  "Bodoquena",
  "Bonito",
  "Brasilândia",
  "Caarapó",
  "Camapuã",
  "Campo Grande",
  "Caracol",
  "Cassilândia",
  "Chapadão do Sul",
  "Corguinho",
  "Coronel Sapucaia",
  "Corumbá",
  "Costa Rica",
  "Coxim",
  "Deodápolis",
  "Dois Irmãos do Buriti",
  "Douradina",
  "Dourados",
  "Eldorado",
  "Fátima do Sul",
  "Glória de Dourados",
  "Guia Lopes da Laguna",
  "Iguatemi",
  "Inocência",
  "Itaporã",
  "Itaquiraí",
  "Ivinhema",
  "Japorã",
  "Jaraguari",
  "Jardim",
  "Jateí",
  "Juti",
  "Ladário",
  "Laguna Carapã",
  "Maracaju",
  "Miranda",
  "Mundo Novo",
  "Naviraí",
  "Nioaque",
  "Nova Alvorada do Sul",
  "Nova Andradina",
  "Novo Horizonte do Sul",
  "Paranaíba",
  "Paranhos",
  "Pedro Gomes",
  "Ponta Porã",
  "Porto Murtinho",
  "Ribas do Rio Pardo",
  "Rio Brilhante",
  "Rio Negro",
  "Rio Verde de Mato Grosso",
  "Rochedo",
  "Santa Rita do Pardo",
  "São Gabriel do Oeste",
  "Selvíria",
  "Sete Quedas",
  "Sidrolândia",
  "Sonora",
  "Tacuru",
  "Taquarussu",
  "Terenos",
  "Três Lagoas",
  "Vicentina",
]
  response.render('album_form', { cidades: cidades });
});

router.post('/album_form', upload.single('photo'), AlbumDigitalController.insertAlbumDigital);

module.exports = router;