<?php

$folder_name = 'upload/';

if( !empty($_FILES) ){
    $temp_file = $_FILES['file']['tmp_name'];
    $location = $folder_name . $_FILES['file']['name'];
    move_uploaded_file($temp_file, $location);
}