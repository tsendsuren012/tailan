// ===================== QUESTIONS DATA =====================
const QUESTIONS = [
  // --- ЛОГИК ---
  {
    category: "Логик",
    text: "2, 4, 8, 16, 32, ... Дараагийн тоо юу вэ?",
    options: ["48", "64", "60", "56"],
    answer: 1,
    explanation: "Тоо бүр 2-оор үржигдэж байна: 32 × 2 = 64."
  },
  {
    category: "Логик",
    text: "Хэрэв A > B, B > C бол A болон C харьцаа ямар байна?",
    options: ["A < C", "A = C", "A > C", "Тодорхойгүй"],
    answer: 2,
    explanation: "Шилжилтийн чанараар: A > B > C тул A > C."
  },
  {
    category: "Логик",
    text: "1, 1, 2, 3, 5, 8, 13, ... Дараагийн тоо?",
    options: ["18", "20", "21", "24"],
    answer: 2,
    explanation: "Фибоначчийн дарааллын дагуу: 8 + 13 = 21."
  },
  {
    category: "Логик",
    text: "100-аас 200 хүртэлх 5-д хуваагддаг тоо хэд байх вэ?",
    options: ["18", "19", "20", "21"],
    answer: 2,
    explanation: "100, 105, 110, ..., 200. Тоо = (200 - 100) / 5 + 1 = 21. Гэхдээ 100 оруулаагүй бол: 105-аас 200, нийт 20."
  },
  {
    category: "Логик",
    text: "Дараалсан 3 тэгш тооны нийлбэр 78 бол хамгийн жижиг тоо нь?",
    options: ["24", "26", "28", "22"],
    answer: 0,
    explanation: "n + (n+2) + (n+4) = 78 → 3n + 6 = 78 → n = 24."
  },
  // --- МАТЕМАТИК ---
  {
    category: "Математик",
    text: "Гурвалжны 3 өнцгийн нийлбэр хэд вэ?",
    options: ["90°", "270°", "360°", "180°"],
    answer: 3,
    explanation: "Ямар ч гурвалжны 3 өнцгийн нийлбэр 180° байдаг."
  },
  {
    category: "Математик",
    text: "√144 = ?",
    options: ["11", "12", "13", "14"],
    answer: 1,
    explanation: "12 × 12 = 144, тиймээс √144 = 12."
  },
  {
    category: "Математик",
    text: "Тойргийн талбай томъёо аль нь вэ?",
    options: ["2πr", "πr²", "πd", "2πr²"],
    answer: 1,
    explanation: "Тойргийн талбай = πr² (π × радиусын квадрат)."
  },
  {
    category: "Математик",
    text: "Хэрэв x² = 25 бол x = ?",
    options: ["5 эсвэл -5", "Зөвхөн 5", "Зөвхөн -5", "25"],
    answer: 0,
    explanation: "x² = 25 үед x = +5 эсвэл x = -5 байна."
  },
  {
    category: "Математик",
    text: "2⁸ = ?",
    options: ["128", "256", "512", "64"],
    answer: 1,
    explanation: "2⁸ = 2×2×2×2×2×2×2×2 = 256."
  },
  // --- ОРОН ZAI (SPATIAL) ---
  {
    category: "Орон зай",
    text: "Куб хэдэн ирмэгтэй вэ?",
    options: ["8", "10", "12", "6"],
    answer: 2,
    explanation: "Кубт 12 ирмэг байна: доод 4 + дээд 4 + босоо 4."
  },
  {
    category: "Орон зай",
    text: "Тэтраэдр хэдэн нүүртэй вэ?",
    options: ["3", "4", "5", "6"],
    answer: 1,
    explanation: "Тэтраэдр нь 4 гурвалжин нүүртэй биет."
  },
  {
    category: "Орон зай",
    text: "Дөрвөлжний диагональ нь талаасаа хэд дахин урт вэ (√-тэй)?",
    options: ["√2", "√3", "2", "√5"],
    answer: 0,
    explanation: "Тал a-тай дөрвөлжний диагональ = a√2."
  },
  // --- ХЭЛНИЙ ЛОГИК ---
  {
    category: "Хэлний логик",
    text: "\"НОМ\" гэдэг үгийн эсрэг утгатай үг аль нь вэ (аналоги)?  Ном : Уншигч = Зураг : ?",
    options: ["Үзэгч", "Зурагч", "Зохиолч", "Дэлгэц"],
    answer: 0,
    explanation: "Номыг уншигч хэрэглэдэг, зургийг үзэгч хэрэглэдэг."
  },
  {
    category: "Хэлний логик",
    text: "Дараах үгсийн ямар бүлэг нь ялгаатай вэ?\nНохой – Муур – Хулгана – Алим – Туулай",
    options: ["Нохой", "Муур", "Алим", "Туулай"],
    answer: 2,
    explanation: "Алим нь ургамал бөгөод бусад нь амьтад юм."
  },
  // --- ОЙН ЧАНАр ---
  {
    category: "Ой санамж",
    text: "3, 7, 2, 9, 4, 1, 6 — Энэ дарааллын нийлбэр?",
    options: ["30", "31", "32", "33"],
    answer: 2,
    explanation: "3+7+2+9+4+1+6 = 32."
  },
  // --- ЕРӨНХИЙ МЭДЛЭГ ---
  {
    category: "Ерөнхий мэдлэг",
    text: "Нарны аймгийн хамгийн том гараг аль нь вэ?",
    options: ["Дэлхий", "Санчир", "Бархасбадь", "Тэнгэрийн ван"],
    answer: 2,
    explanation: "Бархасбадь (Jupiter) нь нарны аймгийн хамгийн том гараг."
  },
  {
    category: "Ерөнхий мэдлэг",
    text: "Гэрлийн хурд хоёр нь ойролцоогоор хэд вэ?",
    options: ["300,000 км/с", "150,000 км/с", "3,000 км/с", "30,000 км/с"],
    answer: 0,
    explanation: "Гэрлийн хурд ≈ 299,792 км/с, ≈ 300,000 км/с."
  },
  {
    category: "Ерөнхий мэдлэг",
    text: "Усны химийн томъёо аль нь вэ?",
    options: ["CO₂", "NaCl", "H₂O", "O₂"],
    answer: 2,
    explanation: "Ус нь 2 устөрөгч ба 1 хүчилтөрөгчийн атомоос тогтоно: H₂O."
  },
  {
    category: "Ерөнхий мэдлэг",
    text: "Монгол улсын нийслэл хот аль нь вэ?",
    options: ["Дархан", "Улаанбаатар", "Эрдэнэт", "Чойбалсан"],
    answer: 1,
    explanation: "Монгол улсын нийслэл нь Улаанбаатар хот юм."
  }
];

// ===================== IQ LEVEL DEFINITIONS =====================
const IQ_LEVELS = [
  { min: 0,   max: 69,  label: "Дундаас доош",   emoji: "💡", color: "#6b7280",
    desc: "Та энэ удаа хүссэн үр дүндээ хүрээгүй байна. Дахин оролдож, логик сэтгэлгээгээ хөгжүүлж болно!" },
  { min: 70,  max: 84,  label: "Дунд зэрэг доош", emoji: "📘", color: "#3b82f6",
    desc: "Таны оюун ухааны түвшин дунджаас бага зэрэг доогуур байна. Дасгал хийснээр сайжирна." },
  { min: 85,  max: 99,  label: "Дундаж",           emoji: "⭐", color: "#8b5cf6",
    desc: "Таны IQ дундаж хэмжээнд байна. Та олонхийн адил оюун ухааны чадвартай." },
  { min: 100, max: 114, label: "Дундаж дээш",      emoji: "🌟", color: "#06b6d4",
    desc: "Та дундаж хэмжээнээс дээш оюун ухаантай! Логик сэтгэлгээ сайн хөгжсөн байна." },
  { min: 115, max: 129, label: "Өндөр",             emoji: "🔥", color: "#f59e0b",
    desc: "Өндөр IQ! Та ихэнх хүмүүсийн дээр оюун ухааны чадвартай байна. Гайхалтай!" },
  { min: 130, max: 200, label: "Гайхалтай өндөр",  emoji: "🏆", color: "#10b981",
    desc: "Та хурдан сэтгэдэг, ер бусын оюуны чадвартай! Нийт хүн амын 2%-д багтаж байна." }
];

// ===================== STATE =====================
let state = {
  currentQ: 0,
  userAnswers: [],
  startTime: null,
  timerInterval: null,
  totalSeconds: 5 * 60,
  secondsLeft: 5 * 60,
  questions: []
};

// ===================== UTILS =====================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function getIQLevel(score) {
  return IQ_LEVELS.find(l => score >= l.min && score <= l.max) || IQ_LEVELS[0];
}

function calcIQ(correct, total) {
  // Map 0-20 correct → IQ 60-145
  const ratio = correct / total;
  return Math.round(60 + ratio * 85);
}

// ===================== PARTICLES =====================
function createParticles() {
  const container = document.getElementById('particles');
  const colors = ['#7c3aed', '#06b6d4', '#f59e0b', '#10b981', '#f97316'];
  for (let i = 0; i < 28; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 8 + 4;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const duration = Math.random() * 18 + 10;
    const delay = Math.random() * 15;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${left}%;
      background:${color};
      animation-duration:${duration}s;
      animation-delay:${delay}s;
    `;
    container.appendChild(p);
  }
}

// ===================== SCREEN SWITCH =====================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const s = document.getElementById(id);
  s.classList.add('active');
}

// ===================== QUIZ START =====================
function startQuiz() {
  state.questions = shuffle(QUESTIONS);
  state.currentQ = 0;
  state.userAnswers = new Array(state.questions.length).fill(null);
  state.secondsLeft = 5 * 60;
  state.startTime = Date.now();
  showScreen('screen-quiz');
  renderQuestion();
  startTimer();
}

// ===================== TIMER =====================
function startTimer() {
  clearInterval(state.timerInterval);
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    state.secondsLeft--;
    updateTimerDisplay();
    if (state.secondsLeft <= 0) {
      clearInterval(state.timerInterval);
      showResult();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const el = document.getElementById('timer-display');
  const box = document.getElementById('timer-box');
  el.textContent = formatTime(state.secondsLeft);
  if (state.secondsLeft <= 60) box.classList.add('urgent');
  else box.classList.remove('urgent');
}

// ===================== RENDER QUESTION =====================
function renderQuestion() {
  const q = state.questions[state.currentQ];
  const total = state.questions.length;

  document.getElementById('q-current').textContent = state.currentQ + 1;
  document.getElementById('q-total').textContent = total;
  document.getElementById('q-category').textContent = q.category;
  document.getElementById('q-text').textContent = q.text;

  const pct = ((state.currentQ) / total) * 100;
  document.getElementById('progress-bar').style.width = Math.max(pct, 5) + '%';

  const container = document.getElementById('options-container');
  container.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.id = `opt-${i}`;
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span class="opt-text">${opt}</span>`;
    btn.addEventListener('click', () => selectAnswer(i));
    container.appendChild(btn);
  });

  // Animate card
  const card = document.getElementById('quiz-card');
  card.style.opacity = '0';
  card.style.transform = 'translateX(30px)';
  setTimeout(() => {
    card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    card.style.opacity = '1';
    card.style.transform = 'translateX(0)';
  }, 10);
}

// ===================== SELECT ANSWER =====================
function selectAnswer(selectedIdx) {
  const q = state.questions[state.currentQ];
  state.userAnswers[state.currentQ] = selectedIdx;

  const btns = document.querySelectorAll('.option-btn');
  btns.forEach(b => b.disabled = true);

  btns[selectedIdx].classList.add(selectedIdx === q.answer ? 'correct' : 'wrong');
  if (selectedIdx !== q.answer) {
    btns[q.answer].classList.add('correct');
  }

  setTimeout(() => {
    state.currentQ++;
    if (state.currentQ < state.questions.length) {
      renderQuestion();
    } else {
      clearInterval(state.timerInterval);
      showResult();
    }
  }, 900);
}

// ===================== SHOW RESULT =====================
function showResult() {
  const correct = state.userAnswers.filter((a, i) => a === state.questions[i].answer).length;
  const total = state.questions.length;
  const wrong = total - correct;
  const iq = calcIQ(correct, total);
  const level = getIQLevel(iq);
  const elapsed = Math.floor((Date.now() - state.startTime) / 1000);

  document.getElementById('result-trophy').textContent = level.emoji;
  document.getElementById('iq-label').textContent = level.label;
  document.getElementById('iq-description').textContent = level.desc;
  document.getElementById('stat-correct').textContent = correct;
  document.getElementById('stat-wrong').textContent = wrong;
  document.getElementById('stat-time').textContent = formatTime(elapsed);

  showScreen('screen-result');

  // Animate counter
  animateCounter(document.getElementById('iq-score'), 0, iq, 1600);

  // Animate ring
  const ring = document.getElementById('ring-fill');
  const circumference = 534;
  const pct = Math.min(iq / 145, 1);
  ring.style.stroke = level.color;
  setTimeout(() => {
    ring.style.strokeDashoffset = circumference * (1 - pct);
  }, 200);

  // SVG gradient
  ensureSvgGradient();
}

function animateCounter(el, from, to, duration) {
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(from + (to - from) * ease);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function ensureSvgGradient() {
  const svg = document.querySelector('.score-ring');
  if (!svg) return;
  let defs = svg.querySelector('defs');
  if (!defs) {
    defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    svg.prepend(defs);
  }
  if (!defs.querySelector('#scoreGrad')) {
    defs.innerHTML = `
      <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stop-color="#7c3aed"/>
        <stop offset="100%" stop-color="#06b6d4"/>
      </linearGradient>`;
  }
}

// ===================== REVIEW =====================
function showReview() {
  const list = document.getElementById('review-list');
  list.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  state.questions.forEach((q, qi) => {
    const userAns = state.userAnswers[qi];
    const isCorrect = userAns === q.answer;

    const item = document.createElement('div');
    item.className = `review-item ${isCorrect ? 'review-correct' : 'review-wrong'}`;

    const answersHTML = q.options.map((opt, oi) => {
      let cls = '';
      const isAns = oi === q.answer;
      const isSel = oi === userAns;
      if (isAns && isSel) cls = 'is-both';
      else if (isAns) cls = 'is-correct';
      else if (isSel) cls = 'is-selected';
      const icon = isAns ? '✓' : (isSel ? '✗' : '·');
      return `<div class="review-answer ${cls}">${icon} ${letters[oi]}) ${opt}</div>`;
    }).join('');

    item.innerHTML = `
      <div class="review-q-top">
        <span class="review-q-num">Асуулт ${qi + 1} · ${q.category}</span>
        <span class="review-badge ${isCorrect ? 'badge-correct' : 'badge-wrong'}">
          ${isCorrect ? '✓ Зөв' : '✗ Буруу'}
        </span>
      </div>
      <div class="review-q-text">${q.text}</div>
      <div class="review-answers">${answersHTML}</div>
      <div class="review-explanation">💡 ${q.explanation}</div>
    `;
    list.appendChild(item);
  });

  showScreen('screen-review');
}

// ===================== EVENT LISTENERS =====================
document.getElementById('btn-start').addEventListener('click', startQuiz);
document.getElementById('btn-retry').addEventListener('click', () => showScreen('screen-landing'));
document.getElementById('btn-review').addEventListener('click', showReview);
document.getElementById('btn-back-to-result').addEventListener('click', () => showScreen('screen-result'));

// ===================== INIT =====================
createParticles();
