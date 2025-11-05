<?php
require_once 'config.php';

// ==========================================================
// Cargar progreso del usuario
// ==========================================================

$user = isset($_GET['user']) ? preg_replace("/[^a-zA-Z0-9_-]/", "", $_GET['user']) : "";

if (!$user) {
    http_response_code(400);
    echo json_encode(["error" => "Usuario no especificado."]);
    exit();
}

$file = DATA_PATH . "{$user}_progress.json";

if (!file_exists($file)) {
    echo json_encode(["progress" => [], "message" => "Sin progreso previo."]);
} else {
    echo file_get_contents($file);
}
?>
