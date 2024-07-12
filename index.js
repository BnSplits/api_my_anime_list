const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware pour analyser le corps des requêtes JSON
app.use(express.json());

// Fonction pour lire le fichier JSON
const readDataFromFile = () => {
    const data = fs.readFileSync('anime-offline-database.json');
    return JSON.parse(data);
};

// Route pour rechercher des animes par titre
app.get('/search', (req, res) => {
    const title = req.query.title;
    if (!title) {
        return res.status(400).send('Le paramètre "title" est requis');
    }

    const jsonData = readDataFromFile();
    const results = jsonData.data.filter(anime => anime.title.toLowerCase().includes(title.toLowerCase()));

    res.json(results);
});

app.listen(port, () => {
    console.log(`API en cours d'exécution sur http://localhost:${port}`);
});
