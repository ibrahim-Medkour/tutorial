<?php
class Film {
    public function getTitre(): string {
        return "Interstellar";
    }
}

class GestionFilms {
    public function getFilm(): Film {
        return new Film();
    }
}

$gestion = new GestionFilms();

$film = $gestion->getFilm();

echo $film->getTitre();