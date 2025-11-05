<?php
// ==========================================================
// CodeLingua - Configuración del Backend
// Versión: v2.0 (141125)
// Autor: Arlevy Sabogal & GPT-5
// ==========================================================

// Carpeta donde se almacenan los progresos en formato JSON
define('DATA_PATH', __DIR__ . '/../data/');

// Crear carpeta si no existe
if (!file_exists(DATA_PATH)) {
    mkdir(DATA_PATH, 0777, true);
}

// Encabezados CORS para permitir comunicación con JS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Manejador simple para solicitudes OPTIONS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}
?>
