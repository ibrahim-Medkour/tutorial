<?php

require_once "..//backend/Categorie.php";

$categorie = new Categorie(1, "Informatique");

$categorie->setNom("Développement");

echo $categorie->getNom();