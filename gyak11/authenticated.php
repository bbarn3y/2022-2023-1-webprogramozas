Authenticated as:

<?php
session_start();
print_r($_SESSION['user']);
$user = $_SESSION['user'];
?>
W
<?php
if (in_array('user', $user['roles'])) :
?>
<button>User button</button>
<?php
endif;
?>

<?php
if (in_array('admin', $user['roles'])) :
    ?>
    <button>Admin button</button>
<?php
endif;
?>
