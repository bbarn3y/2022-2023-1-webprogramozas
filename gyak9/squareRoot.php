<?php

    print_r($_GET);
    print_r($_POST);

    $error = '';
    $number = NULL;

    $number = $_GET['number'] ?? $_POST['number'];

    if ($number == null || $number == '') {
        $error = 'Empty value!';
        $number = 0;
    } else if (!is_numeric($number)) {
        $error = 'Value must be numeric!';
        $number = 0;
    }

    $squareRoot = sqrt($number);

    echo '<br> SQRT:' . $squareRoot;
?>

<?php if ($error != '') : ?>
    <div style="color: red"><?= $error ?></div>
<?php endif; ?>

