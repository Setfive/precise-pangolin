<?php 

error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
$lastPost = file_get_contents("last_request_at");
file_put_contents("last_request_at", time());

if( time() - $lastPost < 3 ){
	echo json_encode( ["error" => "Requesting to fast"] );
	exit(0);
}

$body = trim(file_get_contents('php://input'));
$result = ["valid" => false];

if( !is_numeric($body) ||  strlen($body) != 12 ){
	echo json_encode($result);
	exit(0);	
}

$parts = array_chunk( str_split($body), 4 );
$parts = array_map(function($lst){return join("", $lst);}, $parts);

$result["valid"] = $parts[0] > $parts[1] && $parts[1] > $parts[2];
echo json_encode($result);