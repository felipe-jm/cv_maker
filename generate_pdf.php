<?php

//include autoloader
require_once 'vendor/autoload.php';

//Dompdf namescape
use Dompdf\Dompdf;
use Dompdf\Options;

ob_start();
require_once 'curriculum.php';
$html = ob_get_clean();
ob_end_clean();

$options = new Options();
$options->set('isRemoteEnabled', TRUE);

//initialize dompdf class
$doc = new Dompdf($options);

$doc->set_option('isHtml5ParserEnabled', true);

$doc->loadHtml($html);
//set page size and orientation
$doc->setPaper('A4', 'portrait');

//Render the HTML as PDF
$doc->render();

//get output of generated pdf in browser
$doc->stream("CurriculoEA", array("Attachment"=>0));
//1 = Download
//0 = Preview

?>

