<!DOCTYPE html>
<html lang="hu">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>

        Hello there!

        <?php
            echo 'Dynamic string';
        ?>

        <?php
            $bool = true;
            $int = 4;
            $float = 4.2;
            $string = "4.2";
            $array = ["asd", "asdasd"];
            $callable = function() {};

            echo "<br> gettype(bool): " . gettype($bool);
            echo "<br> gettype(int): " . gettype($int);
            echo "<br> gettype(float): " . gettype($float);
            echo "<br> gettype(string): " . gettype($string);
            echo "<br> gettype(array): " . gettype($array);
            echo "<br> gettype(callable): " . gettype($callable);
            echo "<br> is_callable(callable): " . is_callable($callable) . $bool;

            echo 5 + 3;
            echo 3 <=> 5;
            $variable = 10;
            echo $variable ?? NULL ?? 8;
            echo NULL ?? NULL ?? 8;
            echo $variable == 9 ? 1 : 0;

            // Find even numbers
            function even($array) {
                $result = [];
                foreach($array as $number) {
                    if ($number % 2 == 0) {
                        $result[] = $number;
                    }
                }
                return $result;
            }

            function filter(array $array, callable $fn): array {
                $result = [];
                foreach($array as $number) {
                    if ($fn($number)) {
                        $result[] = $number;
                    }
                }
                return $result;
            }

            $numbers = [-2, 0, 1, 8, 9, 10, 16, 17];
            $evenNumbers = even($numbers);
            echo '<br> <h3>Even and odd number</h3>';
            print_r($evenNumbers);

            $oddNumbers = filter($numbers, function($n) {
                return $n % 2 == 1;
            });
            echo "<br>Odd numbers: <br>";
            print_r($oddNumbers);

            $oddNumbersAlternative = array_filter($numbers, fn($number) => $number % 2 == 1);
            echo "<br>Odd numbers alternative: <br>";
            print_r($oddNumbersAlternative);
        ?>

        <ul>
            <?php foreach($evenNumbers as $evenNumber) : ?>
            <li><?= $evenNumber ?></li>
            <?php endforeach; ?>
        </ul>

        <h3>Mini form</h3>

        <?php
            $settings = [
                    1 => [
                            'name' => 'Theme',
                            'type' => 'radio',
                            'options' => [
                                    'light' => false,
                                    'dark' => true
                            ]
                    ],
                    2 => [
                            'name' => 'Mode',
                            'type' => 'checkbox',
                            'options' => [
                                    'mode1' => true,
                                    'mode2' => false,
                                    'mode3' => true
                            ]
                    ]
            ];

        ?>

        <input type="radio" name="Theme"> Light
        <input type="radio" name="Theme"> Dark

        <?php foreach($settings as $id => $setting) : ?>
            <h4><?= $setting['name'] ?></h4>
            <?php foreach($setting['options'] as $option => $checked) : ?>
                <input type="<?= $setting['type'] ?>"
                       name="setting_<?= $id ?>"
                       <?= $checked ? 'checked' : '' ?>
                />
                <?= $option ?>
            <?php endforeach; ?>
        <?php endforeach; ?>

        <!-- Data -->
        <?php
            print_r(getenv("PATH"));
        ?>

        <br>
        <a href="http://localhost:8000/gyak8.php?color=green">Green</a>
        <?php
            // print_r($_GET['color']);

            $backgroundColor = $_GET["color"] ?? "white";
            echo $backgroundColor;
        ?>

        <style>
            html {
                background-color: <?= $backgroundColor ?>
            }
        </style>

    <script></script>
    </body>
</html>
