<?php
require_once 'config.php';

// ==========================================================
// Guardar progreso de una unidad
// ==========================================================

$input = json_decode(file_get_contents("php://input"), true);

if (!$input || !isset($input['user']) || !isset($input['unit']) || !isset($input['progress'])) {
    http_response_code(400);
    echo json_encode(["error" => "Datos incompletos."]);
    exit();
}

$user = preg_replace("/[^a-zA-Z0-9_-]/", "", $input['user']);
$file = DATA_PATH . "{$user}_progress.json";

$data = [];
if (file_exists($file)) {
    $data = json_decode(file_get_contents($file), true);
}

$data[$input['unit']] = [
    "progress" => $input['progress'],
    "timestamp" => date("Y-m-d H:i:s")
];

file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));
echo json_encode(["success" => true, "message" => "Progreso guardado correctamente."]);
?>
