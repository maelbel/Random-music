<?php

$musics = file_get_contents('../src/data/musics.csv');
$rows = explode("\r\n", $musics);
$length = sizeof($rows);
$played = explode(",", $_POST['played']);

do {
    $rand_int = rand(1, $length-2);
    $music = $rows[$rand_int];
    $data = explode(";", $music);
} while(in_array($data[1], $played));

echo $music;
?>