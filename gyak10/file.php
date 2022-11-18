<?php

$personsFile = fopen("persons.json", "r");

$personsAsString = fread($personsFile, filesize("persons.json"));
$parsedPersons = json_decode($personsAsString, true);

?>

<ul>
<?php
    foreach ($parsedPersons as $person) : ?>
    <li>
        <?= $person['name'] ?>,
        <?= $person['age'] ?> years old,
        <?php
            switch($person['sex']) {
                case 'M':
                    echo 'Male';
                    break;
                case 'F':
                    echo 'Female';
                    break;
                default:
                    echo 'Other';
                    break;
            }
        ?>
    </li>
<?php endforeach; ?>
</ul>

<?php

function prettyPrintSex(string $sex): string {
    switch($sex) {
        case 'M':
            return 'Male';
        case 'F':
            return 'Female';
        default:
            return 'Other';
    }
}

$personsCSVFile = fopen('persons.csv', 'w');

fwrite($personsCSVFile, 'name,age,sex' . PHP_EOL);
foreach ($parsedPersons as $person) {
    fwrite($personsCSVFile, $person['name'] . ',' . $person['age'] . ',' . prettyPrintSex($person['sex']) . PHP_EOL);
}

fclose($personsCSVFile);

?>

<?php

$personsFromCSV = [];

$personsCSVFile = fopen('persons.csv', 'r');

$headers = fgetcsv($personsCSVFile, NULL, ',');
while($row = fgetcsv($personsCSVFile, NULL, ',')) {
    // print_r($row);
    $personsFromCSV[] = array_combine($headers, $row);
}

fclose($personsCSVFile);

?>

<ul>
    <?php foreach ($personsFromCSV as $person) : ?>
    <li>
        <?= $person['name'] ?>
    </li>
    <?php endforeach; ?>
</ul>

<?php
    $personsFromJSONOneLiner = json_decode(file_get_contents('persons.json'), true);

    print_r($personsFromJSONOneLiner);

    file_put_contents('tmp.txt', "asdasd asdd asd asd  asd\n sadasd");
?>
