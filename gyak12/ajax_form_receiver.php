<?php

$result = [];
foreach ($_POST as $key => $value) {
    if (strlen($value) > 3) {
        $result[$key] = $value;
    }
}

function handleFormAsJSON($result) {
    echo json_encode($result);
}

function handleFormAsHTML($result) {
?>
<table>
    <thead>
        <tr>
            <th>Key</th>
            <th>Value</th>
        </tr>
    </thead>
    <tbody>
    <?php
    foreach ($result as $key => $value) :
    ?>
    <tr>
        <td><?= $key?></td>
        <td><?= $value?></td>
    </tr>
    <?php
    endforeach;
    ?>
    </tbody>
</table>
<?php
}

// handleFormAsJSON($result);

handleFormAsHTML($result);
