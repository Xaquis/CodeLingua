<?php
// =======================================================
// CodeLingua - Registro de Usuarios (modo local JSON)
// =======================================================
header('Content-Type: application/json; charset=utf-8');

$file = __DIR__ . '/../data/users.json';

if (!file_exists($file)) {
  file_put_contents($file, json_encode([]));
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['username']) || !isset($data['password']) || !isset($data['email'])) {
  echo json_encode(["error" => "Datos incompletos"]);
  exit;
}

$users = json_decode(file_get_contents($file), true);
$username = strtolower(trim($data['username']));

if (isset($users[$username])) {
  echo json_encode(["error" => "El usuario ya existe."]);
  exit;
}

$users[$username] = [
  "email" => $data['email'],
  "password" => password_hash($data['password'], PASSWORD_DEFAULT),
  "role" => "user",
  "created_at" => date("Y-m-d H:i:s")
];

file_put_contents($file, json_encode($users, JSON_PRETTY_PRINT));

echo json_encode(["success" => "Usuario registrado correctamente."]);
?>
