const express=require('express')
const qr = require('qrcode');
const app=express()
const axios=require("axios")

app.get('/qrcode', (req, res) => {
    const githubLink = req.query.githubLink;
  
    if (!githubLink) {
      return res.status(400).send('Por favor, forneça um link do GitHub.');
    }
  
    qr.toDataURL(githubLink, (err, data_url) => {
      if (err) {
        res.status(500).send('Erro ao gerar o código QR.');
      } else {
        res.send(`<img src="${data_url}" alt="QR Code">`);
      }
    });
  });



const githubLink = 'https://github.com/InacioRodrigues';
const apiUrl = `http://localhost:3000/qrcode?githubLink=${encodeURIComponent(githubLink)}`;

axios.get(apiUrl)
  .then(response => {
    // Aqui, você pode lidar com a resposta, que conterá a imagem do código QR.
    console.log(response.data); // Isto é o código QR em formato de imagem (HTML).
  })
  .catch(error => {
    console.error(error);
  });


app.listen(3000)
console.log("o servidor está rodando")