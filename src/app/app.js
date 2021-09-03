const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (request, file, cb) => {
    cb(null, file.originalname);
  }
});

const app = express();
const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const pool = require('./db_connection');

app.use('/styles', express.static(path.join(__dirname, '../assets/styles/')));
app.use('/imgs', express.static(path.join(__dirname, '../assets/images/')));
app.use('/js', express.static(path.join(__dirname, '../assets/javascripts/')));
app.use('/term.txt', express.static(path.join(__dirname, '../assets/term.txt')));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '../pages/home.html'));
});

app.get('/album_form', (request, response) => {
  response.sendFile(path.join(__dirname, '../pages/album_form/index.html'));
});

app.post('/album_form', upload.single('photo'), async(request, response) => {
  const query = `INSERT INTO album_digital
                  (nome, cpf, telwhats, email, estado, cidade, datanascimento, nomeresponsavel, 
                    cpfresponsavel, titulofoto, nomefotografo, nomefoto)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
  try{
    await pool.query(query, [request.body.name, request.body.cpf, request.body.phone, request.body.email, 
                              request.body.state, request.body.city, request.body.birth_date, request.body.responsible_name, 
                              request.body.responsible_cpf, request.body.photo_title, request.body.photograph_name, request.file.originalname]);
  } catch(err){
    console.log(err);
  }
  response.redirect('/album_form');
});

module.exports = app;