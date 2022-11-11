<?php
    print_r($_POST);
    print_r($_FILES);
    $fileContent = file_get_contents($_FILES['thefile']['tmp_name']);
    echo '<br>' . nl2br($fileContent);
?>
