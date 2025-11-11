<?php
// ==========================================================
// CodeLingua v2.1 - DEMO LOGIN SIMPLIFICADO
// Autor: Arlevy Sabogal
// Fecha: 15/11/2025
// ==========================================================

// Este sistema no usa base de datos. Es un modo DEMO temporal.
session_start();

// Usuario temporal para pruebas
$_SESSION['user'] = [
  'username' => 'aprendiz1',
  'role' => 'demo',
  'email' => 'demo@codelingua.local'
];

// Redirige al inicio
header("Location: ../index.html?demo=true");
exit;
?>
