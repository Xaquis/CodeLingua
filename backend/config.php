<?php
// backend/config.php
// Configuración mínima de autenticación por sesión
session_start();

if (!isset($_SESSION)) session_start();

// Usuarios guardados en memoria (para pruebas).
// En producción usa base de datos y HTTPS.
$CL_USERS = [
    // Admin: cambiar contraseña MAESTRA en el primer inicio.
    'admin' => [
        'username' => 'admin',
        'display' => 'Administrador',
        'email' => 'admin@codelingua.local',
        'role' => 'admin',
        // password_hash('S1err4&&117*', PASSWORD_DEFAULT) se ejecuta en runtime
        'passhash' => password_hash('S1err4&&117*', PASSWORD_DEFAULT)
    ],
    // Invitado
    'invitado' => [
        'username' => 'invitado',
        'display' => 'Invitado',
        'email' => 'guest@codelingua.local',
        'role' => 'guest',
        'passhash' => password_hash('invitado', PASSWORD_DEFAULT)
    ]
];

// Función de verificación
function cl_login($username, $password) {
    global $CL_USERS;
    if (!isset($CL_USERS[$username])) return false;
    $user = $CL_USERS[$username];
    if (password_verify($password, $user['passhash'])) {
        // Guardar en sesión
        $_SESSION['cl_user'] = [
            'username' => $user['username'],
            'display'  => $user['display'],
            'email'    => $user['email'],
            'role'     => $user['role']
        ];
        return true;
    }
    return false;
}

function cl_logout() {
    $_SESSION = [];
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params["path"], $params["domain"],
            $params["secure"], $params["httponly"]
        );
    }
    session_destroy();
}

function cl_require_auth() {
    if (!isset($_SESSION['cl_user'])) {
        header('Location: /learn/login.html');
        exit;
    }
}

// Guardar helpers globales
$GLOBALS['CL_USERS'] = $CL_USERS;
