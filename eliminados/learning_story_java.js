// ===============================
// CodeLingua - Historia Didáctica: Java
// Narrador: Codder 🧢💻
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const storyTitle = document.getElementById("story-title");
  const storyText = document.getElementById("story-text");
  const storyCode = document.getElementById("story-code");
  const storyQuestion = document.getElementById("story-question");
  const nextBtn = document.getElementById("next-btn");

  if (!storyTitle || !storyText) return; // Evita errores si no existe el bloque

  let step = 0;
  const story = [
    {
      title: "El nacimiento de Java ☕",
      text: "En 1991, un grupo de ingenieros de Sun Microsystems liderado por James Gosling quería crear un lenguaje que pudiera ejecutarse en cualquier dispositivo. Así nació Oak, que más tarde sería conocido como *Java*.",
      code: `// Ejemplo de un programa Java básico
public class HolaMundo {
  public static void main(String[] args) {
    System.out.println("¡Hola Mundo!");
  }
}`,
      question: {
        text: "¿Qué hace el código anterior?",
        options: [
          "Imprime un saludo en pantalla",
          "Apaga el computador",
          "Compila una base de datos",
          "Ejecuta una función matemática"
        ],
        correct: 0
      }
    },
    {
      title: "El lema de Java",
      text: "Java fue diseñado con el principio *Write Once, Run Anywhere*, que significa que un mismo programa puede ejecutarse en cualquier sistema operativo gracias a la JVM (Java Virtual Machine).",
      code: `// JVM ejecuta bytecode
// Esto permite compatibilidad entre sistemas
class Demo {
  public static void main(String[] args) {
    System.out.println("Ejecutando en la JVM...");
  }
}`,
      question: {
        text: "¿Qué permite la JVM en Java?",
        options: [
          "Ejecutar código Java en diferentes sistemas operativos",
          "Traducir texto a varios idiomas",
          "Dibujar gráficos en pantalla",
          "Comprimir archivos"
        ],
        correct: 0
      }
    },
    {
      title: "Programación Orientada a Objetos 🧩",
      text: "Java es un lenguaje orientado a objetos, lo que significa que organiza el código en *clases* y *objetos*. Esto permite que el código sea más modular y reutilizable.",
      code: `// Clase simple en Java
class Perro {
  String nombre;

  void ladrar() {
    System.out.println(nombre + " dice: ¡Guau!");
  }
}

// Crear un objeto
Perro miPerro = new Perro();
miPerro.nombre = "Firulais";
miPerro.ladrar();`,
      question: {
        text: "¿Qué representa una clase en Java?",
        options: [
          "Un molde para crear objetos",
          "Un archivo de configuración",
          "Una línea de comando",
          "Un mensaje del sistema"
        ],
        correct: 0
      }
    },
    {
      title: "Conclusión de la historia 🎓",
      text: "Java cambió el mundo de la programación. Hoy en día se usa en Android, servidores, inteligencia artificial y más. Entender sus fundamentos te abre las puertas a un universo de posibilidades.",
      code: "",
      question: {
        text: "¿Dónde se usa Java actualmente?",
        options: [
          "En desarrollo Android, servidores y sistemas empresariales",
          "Solo en videojuegos retro",
          "Únicamente en navegadores web",
          "En hardware antiguo"
        ],
        correct: 0
      }
    }
  ];

  // ======= FUNCIONES =======

  function renderStep() {
    const current = story[step];
    storyTitle.textContent = current.title;
    storyText.textContent = current.text;
    storyCode.textContent = current.code || "";
    storyQuestion.innerHTML = "";

    if (current.question) {
      const q = document.createElement("p");
      q.textContent = current.question.text;
      storyQuestion.appendChild(q);

      current.question.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.className = "btn small";
        btn.addEventListener("click", () => checkAnswer(i, current.question.correct));
        storyQuestion.appendChild(btn);
      });
    }
  }

  function checkAnswer(selected, correct) {
    const feedback = document.createElement("p");
    feedback.style.fontWeight = "bold";
    feedback.style.marginTop = "8px";
    if (selected === correct) {
      feedback.textContent = "✅ ¡Correcto!";
      feedback.style.color = "#00ff99";
      nextBtn.disabled = false;
    } else {
      feedback.textContent = "❌ No exactamente, intenta recordar lo que explicamos.";
      feedback.style.color = "#FF5E5E";
    }
    storyQuestion.appendChild(feedback);
  }

  nextBtn.addEventListener("click", () => {
    step++;
    if (step < story.length) {
      renderStep();
      nextBtn.disabled = true;
    } else {
      document.getElementById("story-area").classList.add("hidden");
      window.CodeLingua.learningReady?.(); // Desbloquea ejercicios
    }
  });

  // ======= INICIALIZAR =======
  renderStep();
  nextBtn.disabled = true;
  console.log("🧢 Historia de Java iniciada correctamente.");
});
