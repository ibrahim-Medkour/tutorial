<?php
class Categorie {
    
    public $id;
    public $nom;
    public $couleur;

    public function __construct($id, $nom, $couleur) {
        $this->id = $id;
        $this->nom = $nom;
        $this->couleur = $couleur;
    }

    public function afficher() {
        echo $this->nom . " - " . $this->couleur ;
    }
}