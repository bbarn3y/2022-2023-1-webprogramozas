<?php

interface PersonsApi {
    function getPersons(): array;
    function getPersonsOverAge(int $age): array;
}

abstract class PersonsFromWhatever implements PersonsApi {
    abstract function getPersons(): array;

    function getPersonsOverAge(int $age): array {
        $result = [];
        foreach ($this->getPersons() as $person) {
            if ($person['age'] >= $age) {
                $result[] = $person;
            }
        }
        return $result;
    }
}

class PersonsFromJSON extends PersonsFromWhatever {
    function getPersons(): array {
        return json_decode(file_get_contents('persons.json'), true);
    }
}

class PersonsFromMySQL extends PersonsFromWhatever {
    function getPersons(): array {
        // Create connection
        $conn = new mysqli('db4free.net:3306', 'bbarney', 'pBCFjWbX!2.t8DD', 'persons');
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT name, age, sex FROM person";
        $result = $conn->query($sql);

        $persons = [];
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $persons[] = $row;
            }
        } else {
            echo "0 results";
        }
        $conn->close();

        return $persons;
    }
}

//function queryMySQL() {
//    // Create connection
//    $conn = new mysqli('db4free.net:3306', 'bbarney', 'pBCFjWbX!2.t8DD', 'persons');
//    // Check connection
//    if ($conn->connect_error) {
//        die("Connection failed: " . $conn->connect_error);
//    }
//
//    $sql = "SELECT name, age, sex FROM person";
//    $result = $conn->query($sql);
//    return result;
//}

?>

<?php

$personsAPI = new PersonsFromMySQL();

?>

<h1>All persons</h1>
<ul>
    <?php foreach ($personsAPI->getPersons() as $person) : ?>
    <li>
        <?= $person['name'] ?>
    </li>
    <?php endforeach; ?>
</ul>

<?php
    $ageFilter = $_GET['age'] ?? NULL;
?>

<h1>Filtered persons</h1>
<form action="">
    <input type="number" name="age" />
    <button type="submit">Submit</button>
</form>

<?php
if (is_numeric($ageFilter)):
?>
    <ul>
        <?php foreach ($personsAPI->getPersonsOverAge($ageFilter) as $person) : ?>
            <li>
                <?= $person['name'] ?>,
                <?= $person['age'] ?>
            </li>
        <?php endforeach; ?>
    </ul>
<?php
endif;
?>
