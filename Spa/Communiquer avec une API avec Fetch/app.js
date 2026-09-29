
const API_URL = "api.php";

const tableBody = document.querySelector("#table-body");
const form = document.querySelector("#form-categorie");

const nomInput = document.querySelector("#nom");
const couleurInput = document.querySelector("#couleur");
const iconeInput = document.querySelector("#icone");

let ligneEnEdition = null;


// ==========================
// GET — Charger les catégories
// ==========================

function chargerCategories() {

    fetch(API_URL)
        .then(response => response.json())
        .then(result => {

            tableBody.innerHTML = "";

            result.data.forEach(categorie => {

                const ligne = document.createElement("tr");

                ligne.innerHTML = `
                    <td>${categorie.id}</td>
                    <td>${categorie.nom}</td>
                    <td>${categorie.couleur}</td>
                    <td>${categorie.icone}</td>
                    <td>
                        <button class="btn-edit">
                            Modifier
                        </button>

                        <button class="btn-delete">
                            Supprimer
                        </button>
                    </td>
                `;


                // ==========================
                // Modifier
                // ==========================

                const btnEdit = ligne.querySelector(".btn-edit");

                btnEdit.addEventListener("click", () => {

                    ligneEnEdition = categorie.id;

                    nomInput.value = categorie.nom;
                    couleurInput.value = categorie.couleur;
                    iconeInput.value = categorie.icone;

                });


                tableBody.appendChild(ligne);

            });

        });

}


// ==========================
// POST / PUT — Formulaire
// ==========================

form.addEventListener("submit", (event) => {

    event.preventDefault();


    const data = {

        nom: nomInput.value,

        couleur: couleurInput.value,

        icone: iconeInput.value

    };


    // Par défaut : POST
    let method = "POST";


    // Si on est en mode édition : PUT
    if (ligneEnEdition !== null) {

        data.id = ligneEnEdition;

        method = "PUT";

    }


    // ==========================
    // Envoyer vers API
    // ==========================

    fetch(API_URL, {

        method: method,

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    })
    .then(response => response.json())
    .then(result => {

        console.log(result);

        // Vider le formulaire
        form.reset();

        // Quitter le mode édition
        ligneEnEdition = null;

        // Recharger le tableau
        chargerCategories();

    });

});


// ==========================
// Charger au démarrage
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    chargerCategories();

});

