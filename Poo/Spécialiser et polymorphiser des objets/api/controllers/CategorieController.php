
<?php

require_once '../../backend/classes/User.php';
require_once '../../backend/classes/Auteur.php';

$utilisateurs = [
    new User(),
    new Auteur(),

];

foreach ($utilisateurs as $utilisateur) {
    echo $utilisateur->getRoleName() . "<br>";
}
