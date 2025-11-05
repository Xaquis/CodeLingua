<?php
// ==========================================================
// CodeLingua Backend - Estado
// ==========================================================
header("Content-Type: application/json; charset=utf-8");

echo json_encode([
    "status" => "✅ Backend CodeLingua activo",
    "version" => "2.0.141125",
    "author" => "Arlevy Sabogal & GPT-5",
    "time" => date("Y-m-d H:i:s")
], JSON_PRETTY_PRINT);
?>
