const express = require('express');
const app = express();
const port = 8080;

// Utilise les fichiers statiques à partir du répertoire "public".
app.use(express.static('SITE WEB'));

// Démarre le serveur et affiche un message dans la console 
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});




