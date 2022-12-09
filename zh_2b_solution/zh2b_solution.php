<?php

# 1.4, 1.5, 1.6, 1.7, 1.8

if (!empty($_POST) && isset($_POST["filename"])) {

    if (!file_exists($_POST["filename"])) {
        echo '<div style="color: red">The file does not exists!</div>';
        exit();
    }

    $extension = pathinfo($_POST["filename"])["extension"];

    $entitiesFromFile = [];
    switch($extension) {
        case 'csv':
            $csvFile = fopen($_POST['filename'], 'r');
            $headers = fgetcsv($csvFile, NULL, ',');
            while($row = fgetcsv($csvFile, NULL, ',')) {
                $entitiesFromFile[] = array_combine($headers, $row);
            }
            fclose($csvFile);
            break;
        case 'json':
            $jsonFile = fopen($_POST['filename'], "r");
            $entitiesAsString = fread($jsonFile, filesize($_POST['filename']));
            $entitiesFromFile = json_decode($entitiesAsString, true);
            break;
        default:
            echo 'Unknown format!';
            exit();
    }

    if (isset($_POST['filter']) && strlen($_POST['filter'] > 0)) {
        $entitiesFromFile =
            array_filter($entitiesFromFile, fn($entity) => str_contains($entity['name'], $_POST['filter']));
    }

    if (count($entitiesFromFile) == 0) {
        echo '<div style="color: red">No records matching the provided filter!</div>';
        exit();
    }

    ?>
    <table>
        <thead>
            <tr>
            <?php foreach (array_shift($entitiesFromFile) as $key): ?>
                <td><?= $key ?></td>
            <?php endforeach; ?>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($entitiesFromFile as $entity): ?>
                <tr>
                    <?php foreach ($entity as $key => $value) : ?>
                        <td><?= $value ?></td>
                    <?php endforeach; ?>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

<?php
}
