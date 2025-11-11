<?php
require_once 'config.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $u = $_POST['username'] ?? '';
  $p = $_POST['password'] ?? '';
  if (cl_login($u, $p)) {
    header('Location: ../learn/profile.php');
    exit;
  } else {
    header('Location: ../learn/login.html?error=1');
    exit;
  }
}
header('Location: ../learn/login.html');
