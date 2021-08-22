const app = require('./src/app/app');

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

// const server = http.createServer((request, response) => {
//   let html = '';

//   if(request.url == '/'){
//     html = `
//       <html>
//         <head>
//           <title>Hello World</title>
//           <meta charset="utf-8">
//         </head>
//         <body>
//           <h1>Hello World!</h1>
//         </body>
//       </html>
//     `;
//   } else if(request.url == '/sobre'){
//     html = `
//       <html>
//         <head>
//           <title>Sobre</title>
//           <meta charset="utf-8">
//         </head>
//         <body>
//           <h1>Sobre</h1>
//         </body>
//       </html>
//     `;
//   }

//   response.end(html);
// });

// server.listen(3000);

