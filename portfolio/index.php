<?php
session_start();

// Simple hardcoded credentials (in production, use a database)
$valid_username = 'admin';
$valid_password = 'password123';

$login_error = '';

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    
    if ($username === $valid_username && $password === $valid_password) {
        $_SESSION['authenticated'] = true;
        $_SESSION['username'] = $username;
        header('Location: ' . $_SERVER['PHP_SELF']);
        exit();
    } else {
        $login_error = 'Invalid username or password';
    }
}

// Check if user wants to logout
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: ' . $_SERVER['PHP_SELF']);
    exit();
}

// Check if user is authenticated
$is_authenticated = isset($_SESSION['authenticated']) && $_SESSION['authenticated'] === true;
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1GG11TKL4C"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1GG11TKL4C');
</script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chris Parsell Portfolio</title>
  <link rel="stylesheet" href="../../assets/21c-portfolio.css">
</head>
<body>
  <?php if (!$is_authenticated): ?>
    <div class="login-container">
      <h2>Portfolio Login</h2>
      <?php if ($login_error): ?>
        <div class="login-error"><?php echo htmlspecialchars($login_error); ?></div>
      <?php endif; ?>
      <form method="POST">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required placeholder="Enter username">
        
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required placeholder="Enter password">
        
        <button type="submit">Login</button>
      </form>
      <p style="text-align: center; color: #9aa3af; margin-top: 1rem; font-size: 0.85rem;">Demo: admin / password123</p>
    </div>
  <?php else: ?>
    <a href="?logout=1" class="logout-btn">Logout (<?php echo htmlspecialchars($_SESSION['username']); ?>)</a>
    <a href="../../">home</a>
    <main>
      <div class="case">
        <h1>Case Studies</h1>
        <ul>
          <li><a href="./nbc/index.html">NBC Universal</a></li>
          <li><a href="./aws/uc/index.html">Utility Centers: Amazon Web Services (AWS)</a></li>
          <li><a href="./nbc/design_system/gallery.html">2026 Milan Olympics Design System(TVE)</a></li>
          <li><a href="./aws/index.html">Amazon Web Services</a></li>
          <li><a href="./cogstate/lila/index.html">Cogstate Mobile App</a></li>
          <li><a href="./cogstate/islt/index.html">Improving UX for Cognitive Testing in Clinical Trials</a></li>
          <!--
          <li><a href="./etouches/eselect/">eSelect: Academic Call for Papers Tool</a></li>
            -->
        </ul>
      </div>
      <div class="portfolio">
        <h1 class="card"></h1>
      </div>
    </main>
  <?php endif; ?>
</body>
</html>
