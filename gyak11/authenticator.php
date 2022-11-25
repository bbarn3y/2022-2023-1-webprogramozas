<?php


class UserStorage {

    // @note The password is password
    function findUser($username, $password): array {
        // @todo implement!
        return [];
    }

    function getUsers(): array {
        return json_decode(file_get_contents('users.json'), true);
    }
}

function check_user($user_storage, $username, $password) {
    // @todo implement
}

function login($user) {
    // @todo implement!
}

$userStorage = new UserStorage();
$data = [];
if ($_POST && $_POST['username'] != null && $_POST['password'] != null) {
    // @todo log the user in!
}
