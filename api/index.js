const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

// Middleware pour analyser le corps des requêtes JSON
app.use(express.json());

// Fonction pour lire le fichier JSON distant
const readDataFromFile = async () => {
    const response = await axios.get("https://raw.githubusercontent.com/manami-project/anime-offline-database/master/anime-offline-database.json");
    return response.data;
};

app.get("/", (req, res) => res.send("Express on Vercel"));

// Route pour rechercher des animes par titre
app.get('/s', async (req, res) => {
    const title = req.query.title;
    if (!title) {
        return res.status(400).send('Le paramètre "title" est requis');
    }

    try {
        const jsonData = await readDataFromFile();
        const results = jsonData.data.filter(anime => anime.title.toLowerCase().includes(title.toLowerCase()));

        res.json(results);
    } catch (error) {
        res.status(500).send('Erreur lors de la lecture du fichier JSON');
    }
});

app.listen(port, () => {
    console.log(`API en cours d'exécution sur http://localhost:${port}`);
});
