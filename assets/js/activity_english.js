<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CodeLingua - Programming Fundamentals</title>
  <link rel="stylesheet" href="../assets/css/style.css" />
</head>
<body>
  <!-- ===== CABECERA GLOBAL ===== -->
  <header class="site-header">
    <h1 class="logo">💻 CodeLingua - Programming</h1>
    <nav>
      <button id="mode-toggle" class="btn small" title="Cambiar tema">🌙</button>
      <button id="lang-toggle" class="btn small" title="Cambiar idioma">🇬🇧 English</button>
    </nav>
  </header>

  <!-- ===== CONTENIDO PRINCIPAL ===== -->
  <main class="container">
    <section id="mentor-dialogue" class="mentor-dialogue">
      <div class="mentor-bubble"><strong>Codder:</strong> ¡Hola, programador! Soy Codder 🤖.</div>
      <div class="mentor-bubble"><strong>Codder:</strong> En esta unidad aprenderás los fundamentos del lenguaje Java.</div>
      <div class="mentor-bubble"><strong>Codder:</strong> Empecemos con lo básico: estructura, sintaxis y lógica.</div>
    </section>

    <section id="exercises">
      <h2>Unit 1: Introduction to Java Programming</h2>

      <div class="exercise" data-answer="class">
        <p>Exercise 1: Which keyword defines a class in Java?</p>
        <input type="text" placeholder="Your answer..." />
        <button class="check">Check</button>
        <div class="exercise-feedback"></div>
      </div>

      <div class="exercise" data-answer="public static void main">
        <p>Exercise 2: Write the method signature for the main method in Java.</p>
        <input type="text" placeholder="Your answer..." />
        <button class="check">Check</button>
        <div class="exercise-feedback"></div>
      </div>

      <div class="exercise" data-answer="System.out.println">
        <p>Exercise 3: Which command prints text to the console?</p>
        <input type="text" placeholder="Your answer..." />
        <button class="check">Check</button>
        <div class="exercise-feedback"></div>
      </div>

      <div class="progress-bar-container">
        <div id="progress-bar"></div>
      </div>
      <p id="progress">Progress: 0%</p>
      <p id="life-count">Lives: 3</p>
    </section>

    <section id="complete" class="hidden">
      <h3>✅ Unit Complete!</h3>
      <p>Well done! You’ve learned the Java fundamentals.</p>
      <p>Next, Codder will teach you about variables, data types, and methods.</p>
    </section>
  </main>

  <!-- ===== FOOTER ===== -->
  <footer class="site-footer">
    <p>© 2025 CodeLingua. Developed by Arlevy Sabogal.</p>
  </footer>

  <!-- ===== SCRIPTS ===== -->
  <script src="../assets/js/main.js" defer></script>
  <script src="../assets/js/progress.js" defer></script>
  <script src="../assets/js/learning_module.js" defer></script>
  <script src="../assets/js/voice_manager.js" defer></script>
  <script src="../assets/js/activity_programming.js" defer></script>
</body>
</html>
