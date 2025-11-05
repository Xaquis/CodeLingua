<?php
require_once 'config.php';

// ==========================================================
// Borrar progreso del usuario
// ==========================================================

$user = isset($_GET['user']) ? preg_replace("/[^a-zA-Z0-9_-]/", "", $_GET['user']) : "";

if (!$user) {
    http_response_code(400);
    echo json_encode(["error" => "Usuario no especificado."]);
    exit();
}

$file = DATA_PATH . "{$user}_progress.json";

if (file_exists($file)) {
    unlink($file);
    echo json_encode(["success" => true, "message" => "Progreso eliminado."]);
} else {
    echo json_encode(["success" => false, "message" => "No existía progreso para eliminar."]);
}
?>
