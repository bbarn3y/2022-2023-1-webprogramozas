<?php

if (!empty($_GET)) {
    echo implode(',', $_GET);
}

if (!empty($_POST)) {
    echo json_encode($_POST);
}

if (empty($_GET) && empty($_POST)) {
    $body = file_get_contents('php://input');
    echo $body;
}
