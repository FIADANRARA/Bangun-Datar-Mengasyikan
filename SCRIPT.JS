function hitung() {
  const jenis = document.getElementById('jenis').value;
  const inputArea = document.getElementById('input-area');
  let hasil = '';

  if (jenis === 'persegi') {
    const s = prompt("Masukkan panjang sisi (cm):");
    const luas = s * s;
    const keliling = 4 * s;
    hasil = `Luas = ${luas} cm², Keliling = ${keliling} cm`;
  }
  else if (jenis === 'persegiPanjang') {
    const p = prompt("Masukkan panjang (cm):");
    const l = prompt("Masukkan lebar (cm):");
    const luas = p * l;
    const keliling = 2 * (parseFloat(p) + parseFloat(l));
    hasil = `Luas = ${luas} cm², Keliling = ${keliling} cm`;
  }
  else if (jenis === 'segitiga') {
    const a = prompt("Masukkan alas (cm):");
    const t = prompt("Masukkan tinggi (cm):");
    const b = prompt("Masukkan sisi kedua (cm):");
    const c = prompt("Masukkan sisi ketiga (cm):");
    const luas = 0.5 * a * t;
    const keliling = parseFloat(a) + parseFloat(b) + parseFloat(c);
    hasil = `Luas = ${luas} cm², Keliling = ${keliling} cm`;
  }
  else if (jenis === 'lingkaran') {
    const r = prompt("Masukkan jari-jari (cm):");
    const luas = 3.14 * r * r;
    const keliling = 2 * 3.14 * r;
    hasil = `Luas = ${luas.toFixed(2)} cm², Keliling = ${keliling.toFixed(2)} cm`;
  }

  document.getElementById('hasil').innerText = hasil;
}
// === Bagian KUIS INTERAKTIF ===
const quizData = [
  {
    question: "1. Rumus luas persegi adalah ...",
    options: ["p × l", "4 × s", "s × s", "2 × (p + l)"],
    answer: "s × s"
  },
  {
    question: "2. Rumus keliling lingkaran adalah ...",
    options: ["π × r²", "2 × π × r", "½ × a × t", "4 × s"],
    answer: "2 × π × r"
  },
  {
    question: "3. Jika panjang = 8 cm dan lebar = 5 cm, luas persegi panjang adalah ...",
    options: ["13 cm²", "40 cm²", "25 cm²", "16 cm²"],
    answer: "40 cm²"
  },
  {
    question: "4. Jika jari-jari lingkaran 7 cm, berapa kelilingnya (π=3,14)?",
    options: ["21,98 cm", "43,96 cm", "77 cm", "49 cm"],
    answer: "43,96 cm"
  },
  {
    question: "5. Luas segitiga dengan alas 10 cm dan tinggi 8 cm adalah ...",
    options: ["80 cm²", "40 cm²", "18 cm²", "20 cm²"],
    answer: "40 cm²"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(answer) {
  const correct = quizData[currentQuestion].answer;
  const scoreText = document.getElementById("score");
  if (answer === correct) {
    score++;
    scoreText.innerText = "✅ Benar!";
  } else {
    scoreText.innerText = `❌ Salah! Jawaban: ${correct}`;
  }
  document.querySelectorAll(".option-btn").forEach(b => b.disabled = true);
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("score").innerText = "";
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText = `Kuis selesai! 🎉`;
    document.getElementById("options").innerHTML = "";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("score").innerText = `Skor akhir kamu: ${score} dari ${quizData.length}`;
  }
}

// Jalankan kuis otomatis saat halaman dibuka
window.onload = function() {
  loadQuestion();
};
// ✨ Efek animasi muncul saat scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 400;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.style.transform = 'translateY(0)';
      sec.style.opacity = '1';
    } else {
      sec.style.transform = 'translateY(50px)';
      sec.style.opacity = '0';
    }
  });
});

// ✨ Pastikan section pertama langsung tampil saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
  const firstSection = document.querySelector('section');
  if (firstSection) {
    firstSection.style.opacity = '1';
    firstSection.style.transform = 'translateY(0)';
  }
});
