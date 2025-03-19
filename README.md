

## 🚀 Installation & Lancement

### 1️⃣ Cloner le projet
```sh
git clone https://github.com/ayaej/recette_culinaire/
cd recette_culinaire

2️⃣ Installer les dépendances

cd backend
npm install

3️⃣ Configurer les variables d’environnement

Dans backend/.env, ajoute tes informations MongoDB :

MONGO_URI=mongodb+srv://<username>:<password>@<your-cluster>.mongodb.net/<database-name>?retryWrites=true&w=majority
PORT=5001
DB_NAME=recettes

4️⃣ Démarrer le serveur backend

npm run dev

Le backend tourne sur http://localhost:5001.

5️⃣ Lancer le frontend

Ouvre frontend/index.html dans un navigateur ou lance un serveur local :

cd frontend
python3 -m http.server 5500

Puis accède à http://localhost:5500.

⸻

📌 Routes API

Méthode	URL	Description
GET	/api/recettes	Récupérer toutes les recettes
GET	/api/recettes/:id	Récupérer une recette par ID
POST	/api/recettes	Ajouter une nouvelle recette
PUT	/api/recettes/:id	Modifier une recette
DELETE	/api/recettes/:id	Supprimer une recette



⸻

🌍 Déploiement sur un autre cluster MongoDB

📌 Modifier backend/config/db.js

Le projet utilise la base de données définie dans .env, ce qui permet un changement rapide sans modifier le code.

⸻

🌱 Remplir la base de données avec des recettes de test

Après la configuration, exécute cette commande pour insérer des recettes par défaut :

cd backend
node seed.js

Cela va insérer des recettes dans ${DB_NAME}.

⸻

🎯 Améliorations possibles
	•	Ajout d’une authentification avec JWT
	•	Ajout d’une pagination sur les recettes
	•	Hébergement sur un serveur distant (Render, Vercel, etc.)

⸻

🚀 Prêt à coder ? Clone, installe et déploie ton projet ! 😃🔥

---

🚀 **Maintenant, tu peux envoyer ton projet via Teams sans `node_modules` !**  
Si tu veux que je refasse les modifications directement, dis-moi ! 😊
