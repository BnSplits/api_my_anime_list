# Anime Search API

Cette API Node.js permet de rechercher des informations sur des animes à partir d'un fichier JSON externe hébergé sur GitHub. Elle utilise Express pour gérer les requêtes HTTP et Axios pour récupérer les données JSON.

## Fonctionnalités

- Recherche d'animes par titre.
- Utilisation d'un fichier JSON externe pour les données des animes.

## Prérequis

- Node.js installé sur votre machine.
- Accès à Internet pour récupérer les données depuis GitHub.

## Installation

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/votre-utilisateur/mon-projet.git
   cd mon-projet
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

## Utilisation

1. **Démarrer le serveur**

   ```bash
   node index.js
   ```

2. **Faire une recherche**

   Ouvrez votre navigateur ou un outil comme Postman et accédez à l'URL suivante pour rechercher un anime par titre :

   ```
   http://localhost:3000/search?title=NVADE SHOW
   ```

   Remplacez `NVADE SHOW` par le titre de l'anime que vous souhaitez rechercher.

## Exemple de réponse

Si l'anime est trouvé dans le fichier JSON, vous recevrez une réponse JSON avec les détails de l'anime trouvé.

Exemple de réponse pour la recherche `NVADE SHOW` :

```json
[
    {
        "title": "!NVADE SHOW!",
        "type": "SPECIAL",
        "episodes": 1,
        "status": "FINISHED",
        "animeSeason": {
            "season": "FALL",
            "year": 2020
        },
        "picture": "https://cdn.myanimelist.net/images/anime/1930/122178.jpg",
        "tags": [
            "band",
            "full cgi",
            "music",
            "primarily female cast",
            "primarily teen cast"
        ]
    }
]
```

## Notes

- Ce projet utilise Axios pour récupérer le fichier JSON externe. Assurez-vous d'avoir une connexion Internet active lors de l'utilisation de l'API.
- Le fichier JSON externe est hébergé sur GitHub à l'adresse suivante : [anime-offline-database.json](https://raw.githubusercontent.com/manami-project/anime-offline-database/master/anime-offline-database.json).

## Auteur
BananaSplit (@BnSplits)

---