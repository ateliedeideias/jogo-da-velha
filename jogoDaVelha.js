// Inicia a dependencia do Express instalado anteriormente
const express = require('express');
// Inicia o aplicativo Express
const app = express();
// Especifica a porta usada pelo aplicativo
const port = 3001;

var path = require('path');

// Escuta requisições pela raiz do endereço principal do PC servidor
app.get('/', (req, res) => {
  // Envia usuário para página jogar.html, onde contém a implementação do jogo
  res.sendFile(path.join(__dirname + '/jogar.html'));
});

app.listen(port, () => {
  // Escreve no console a informação de que o aplicativo está funcional
  console.log(`Para jogar, acesse o endereço no seu navegador: http://localhost:${port}`);
});