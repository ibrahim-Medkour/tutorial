<?php
class Categorie
{
    private int $id;
    private string $nom;

    public function __construct(int $id, string $nom){
        $this->id = $id;
        $this->nom = $nom;
    }

    // GET id
    public function getId(): int{
        return $this->id;
    }

    // SET id
    public function setId(int $id): void{
        if ($id > 0) {
            $this->id = $id;
        } else {
            echo "L'id doit être supérieur à 0.";
        }
    }

    // GET nom
    public function getNom(): string{
        return $this->nom;
    }

    // SET nom
    public function setNom(string $nom): void{
        if ($nom !== "") {
            $this->nom = $nom;
        } else {
            echo "Le nom ne peut pas être vide.";
        }
    }
}