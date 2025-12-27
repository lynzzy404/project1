<?php
session_start();
$error = '';

// Default credentials
$valid_user = 'void_admin';
$valid_pass = 'reaper123';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    
    if ($username === $valid_user && $password === $valid_pass) {
        $_SESSION['logged_in'] = true;
        $_SESSION['username'] = $username;
        header('Location: dashboard.php');
        exit();
    } else {
        $error = 'Invalid credentials!';
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Admin Login - VoidTech</title>
    <style>
        body { 
            background: #0a0a0a; 
            color: #fff; 
            font-family: monospace;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .login-box {
            background: #1a1a1a;
            padding: 2rem;
            border-radius: 10px;
            border: 1px solid #ff4444;
            width: 300px;
        }
        input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            background: #222;
            border: 1px solid #444;
            color: #fff;
        }
        button {
            background: #ff4444;
            color: white;
            border: none;
            padding: 10px;
            width: 100%;
            cursor: pointer;
            font-weight: bold;
        }
        .error { color: #ff4444; margin-bottom: 1rem; }
    </style>
</head>
<body>
    <div class="login-box">
        <h2>🔒 VoidTech Admin</h2>
        <?php if ($error): ?>
            <div class="error"><?php echo htmlspecialchars($error); ?></div>
        <?php endif; ?>
        <form method="POST">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        <p style="margin-top: 1rem; font-size: 0.8rem; color: #666;">
            <!-- Hidden shell access: .hidden_shell.php -->
        </p>
    </div>
</body>
</html>
