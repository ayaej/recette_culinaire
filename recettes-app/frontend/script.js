const API_URL = 'http://localhost:5001/api/recettes';

document.addEventListener('DOMContentLoaded', () => {
    fetchRecettes();
    document.getElementById('recette-form').addEventListener('submit', handleFormSubmit);
});

// 🟢 Récupérer et afficher les recettes
async function fetchRecettes() {
    try {
        const response = await fetch(API_URL);
        const recettes = await response.json();
        displayRecettes(recettes);
    } catch (error) {
        console.error('❌ Erreur lors du chargement des recettes:', error);
    }
}

// 🎨 Afficher les recettes dans la liste
function displayRecettes(recettes) {
    const recetteList = document.getElementById('recette-list');
    recetteList.innerHTML = '';

    recettes.forEach(recette => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${recette.nom}</strong> - ${recette.difficulte}<br>
            <em>${recette.ingredients.join(', ')}</em><br>
            ⏳ ${recette.tempsPreparation} min<br>
            📖 ${recette.instructions}<br>
            <button onclick="editRecette('${recette._id}')">✏ Modifier</button>
            <button onclick="deleteRecette('${recette._id}')">🗑 Supprimer</button>
        `;
        recetteList.appendChild(li);
    });
}

// 🟢 Ajouter ou Modifier une recette
async function handleFormSubmit(event) {
    event.preventDefault();
    
    const id = document.getElementById('recette-id').value;
    const recetteData = {
        nom: document.getElementById('nom').value,
        ingredients: document.getElementById('ingredients').value.split(',').map(ing => ing.trim()),
        instructions: document.getElementById('instructions').value,
        tempsPreparation: parseInt(document.getElementById('tempsPreparation').value),
        difficulte: document.getElementById('difficulte').value
    };

    if (id) {
        // Modifier une recette
        await updateRecette(id, recetteData);
    } else {
        // Ajouter une nouvelle recette
        await createRecette(recetteData);
    }

    // Réinitialiser le formulaire et recharger la liste
    document.getElementById('recette-form').reset();
    document.getElementById('recette-id').value = '';
    fetchRecettes();
}

// 🟢 Ajouter une recette (POST)
async function createRecette(recette) {
    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(recette)
        });
    } catch (error) {
        console.error('❌ Erreur lors de l\'ajout de la recette:', error);
    }
}

// 🟠 Modifier une recette (PUT)
async function updateRecette(id, recette) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(recette)
        });
    } catch (error) {
        console.error('❌ Erreur lors de la mise à jour de la recette:', error);
    }
}

// ✏ Pré-remplir le formulaire pour modification
async function editRecette(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const recette = await response.json();

        document.getElementById('recette-id').value = recette._id;
        document.getElementById('nom').value = recette.nom;
        document.getElementById('ingredients').value = recette.ingredients.join(', ');
        document.getElementById('instructions').value = recette.instructions;
        document.getElementById('tempsPreparation').value = recette.tempsPreparation;
        document.getElementById('difficulte').value = recette.difficulte;
    } catch (error) {
        console.error('❌ Erreur lors de la récupération de la recette:', error);
    }
}

// ❌ Supprimer une recette (DELETE)
async function deleteRecette(id) {
    if (!confirm("Voulez-vous vraiment supprimer cette recette ?")) return;
    
    try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        fetchRecettes();
    } catch (error) {
        console.error('❌ Erreur lors de la suppression de la recette:', error);
    }
}