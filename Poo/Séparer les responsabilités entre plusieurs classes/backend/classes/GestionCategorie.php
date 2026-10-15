<?php

require_once __DIR__ . '/Categorie.php';

class GestionCategorie
{
    private static string $dataFile =
        __DIR__ . '/../../data/categorie.json';

    public function getAll(): array
    {
        if (!file_exists(self::$dataFile)) {
            return [];
        }

        $json = file_get_contents(self::$dataFile);
        $data = json_decode($json, true);

        if (!is_array($data)) {
            return [];
        }

        $categories = [];

        foreach ($data as $row) {
            $categories[] = new Categorie(
                (int) $row['id'],
                $row['nom'],
                $row['couleur'],
                $row['icone']
            );
        }

        return $categories;
    }
}
