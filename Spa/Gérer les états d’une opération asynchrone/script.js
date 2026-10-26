
const formCategorie = document.getElementById('form-categorie');
const btnSubmit = document.getElementById('btn-submit-form');
const message = document.getElementById('message');

// Changer l'etat du bouton
function setLoadingState(isLoading) {
    btnSubmit.disabled = isLoading;

    if (isLoading) {
        btnSubmit.textContent = 'Enregistrement...';
    } else {
        btnSubmit.textContent = 'Enregistrer';
    }
}

// Ecouter l'envoi du formulaire
formCategorie.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Afficher le chargement
    setLoadingState(true);
    message.textContent = 'Envoi en cours...';

    // 2. Recuperer les donnees
    const nom = document.getElementById('nom').value;

    // 3. Envoyer la requete a l'API de test
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: nom,
            body: 'Nouvelle categorie',
            userId: 1
        })
    })

    // 4. Verifier la reponse HTTP
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur HTTP : ' + response.status);
        }

        return response.json();
    })

    // 5. Traiter le succes
    .then(data => {
        console.log('Reponse de l API :', data);

        message.textContent =
            'Categorie ajoutee avec succes : ' + data.title;

        formCategorie.reset();
    })

    // 6. Gerer les erreurs
    .catch(error => {
        console.error('Erreur :', error);

        message.textContent =
            'Une erreur est survenue. Reessayez.';
    })

    // 7. Toujours terminer le chargement
    .finally(() => {
        setLoadingState(false);
    });
});
