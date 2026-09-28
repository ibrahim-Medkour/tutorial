<?php
require_once 'Categorie.php';

$cat1 = new Categorie(
    1,
    "Développement",
    "Orange"
);

$cat2 = new Categorie(
    2,
    "Design",
    "Blue",
);
$cat1->afficher();

$cat2->afficher();