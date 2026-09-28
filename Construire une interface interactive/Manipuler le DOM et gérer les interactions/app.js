document.addEventListener("DOMContentLoaded", () => {

const btnShow = document.querySelector("#btn-show-form");
const sectionForm = document.querySelector("#section-form");
const btnCancel = document.querySelector("#btn-cancel-form");
const formCategorie = document.querySelector("#form-categorie");
const catNom = document.querySelector("#cat-nom");
const catCouleur = document.querySelector("#cat-couleur");
const tableBody = document.querySelector("#table-categories-body");


//nouvelle categorie
btnShow.addEventListener("click", () => {
    btnShow.hidden = true;
    sectionForm.hidden = false;
});

//anuller
btnCancel.addEventListener("click", () => {
    btnShow.hidden = false;
    sectionForm.hidden = true;
    formCategorie.reset();
});




formCategorie.addEventListener("submit", (event) => {
    event.preventDefault();

    const nom = catNom.value;
const couleur = catCouleur.value;


tableBody.insertAdjacentHTML(
    "beforeend",
    `
    <tr>
        <td>${nom}</td>
        <td>${couleur}</td>
    </tr>
    `
);

});







formCategorie.reset();
sectionForm.hidden = true;
btnShow.hidden = false;

});