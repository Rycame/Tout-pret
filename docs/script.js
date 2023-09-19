document.addEventListener('DOMContentLoaded', () => {
    const annonceForm = document.getElementById('annonceForm');
    const annoncesContainer = document.querySelector('#rubrique-annonces .annonce');

    annonceForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const titre = document.getElementById('titre').value;
        const description = document.getElementById('description').value;

        if (titre && description) {
            // Créer un élément de div pour l'annonce
            const annonceDiv = document.createElement('div');
            annonceDiv.classList.add('annonce');

            // Remplir le contenu de l'annonce
            annonceDiv.innerHTML = `
                <h3>${titre}</h3>
                <p>${description}</p>
                <button>Contactez-moi</button>
            `;

            // Ajouter l'annonce à la rubrique "Les pépites qui n'attendent que toi"
            annoncesContainer.insertBefore(annonceDiv, annoncesContainer.firstChild);

            // Réinitialiser le formulaire
            annonceForm.reset();
        }
    });
});
