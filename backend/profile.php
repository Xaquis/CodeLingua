<?php
session_start();
header("Content-Type: application/json");

if (!isset($_SESSION['user'])) {
  echo json_encode(["error" => "No has iniciado sesión."]);
  exit;
}

echo json_encode($_SESSION['user']);
?>
