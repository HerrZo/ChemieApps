// State
let state = {
    currentTopicIndex: 0,
    score: 0,
    streak: 0,
    completedQuizzes: new Set()
};

// Content Data
const TOPICS = [
    {
        id: "broensted",
        title: "1. Brønsted-Theorie",
        content: `
            <p>Die klassische Säure-Base-Theorie nach Arrhenius wurde durch Johannes Nicolaus Brønsted und Thomas Martin Lowry erweitert. Diese Theorie legt den Fokus auf die Übertragung von Protonen (Wasserstoff-Ionen, H⁺).</p>
            <div class="visualization-container">
                <div class="molecule">Säure ⇌ Base + H⁺</div>
            </div>
            <ul>
                <li><strong>Säuren</strong> sind Protonendonatoren (Spender). Sie geben H⁺ ab.</li>
                <li><strong>Basen</strong> sind Protonenakzeptoren (Empfänger). Sie nehmen H⁺ auf.</li>
            </ul>
            <div class="callout">
                <div class="callout-title">💡 Protonenübergang</div>
                Damit eine Säure ein Proton abgeben kann, muss eine Base vorhanden sein, die es aufnimmt. Eine Säure-Base-Reaktion ist daher immer eine <strong>Protolyse</strong> (Protonenübertragung).
            </div>
        `,
        quiz: {
            question: "Was macht ein Teilchen nach Brønsted zu einer Basis?",
            options: [
                { text: "Es gibt Protonen ab.", isCorrect: false, error: "Das wäre eine Säure (Protonendonator)." },
                { text: "Es nimmt Protonen auf.", isCorrect: true },
                { text: "Es enthält Sauerstoff.", isCorrect: false, error: "Sauerstoff ist nicht zwingend erforderlich (z.B. NH3 ist eine Base)." }
            ],
            mistakes: ["Verwechslung von Donator und Akzeptor."]
        }
    },
    {
        id: "reaktion_wasser",
        title: "2. Reaktion mit Wasser",
        content: `
            <p>Säuren und Basen reagieren mit Wasser. Das Wasser agiert dabei als Reaktionspartner.</p>
            <h3>Reaktion einer Säure mit Wasser</h3>
            <p>Die Säure gibt ein Proton an das Wasser ab. Es entsteht das <strong>Oxonium-Ion (H₃O⁺)</strong>. Die Lösung wird sauer.</p>
            <div class="equation-row">
                <span class="eq-part">HCl</span> + <span class="eq-part">H₂O</span> ⇌ 
                <span class="eq-part proton">H₃O⁺</span> + <span class="eq-part">Cl⁻</span>
            </div>
            <h3>Reaktion einer Base mit Wasser</h3>
            <p>Die Base nimmt ein Proton vom Wasser auf. Es entsteht das <strong>Hydroxid-Ion (OH⁻)</strong>. Die Lösung wird basisch.</p>
            <div class="equation-row">
                <span class="eq-part">NH₃</span> + <span class="eq-part">H₂O</span> ⇌ 
                <span class="eq-part">NH₄⁺</span> + <span class="eq-part proton" style="color:var(--accent)">OH⁻</span>
            </div>
        `,
        quiz: {
            question: "Welches Ion ist für die saure Eigenschaft einer Lösung verantwortlich?",
            options: [
                { text: "Hydroxid-Ion (OH⁻)", isCorrect: false, error: "OH⁻ ist charakteristisch für basische Lösungen." },
                { text: "Oxonium-Ion (H₃O⁺)", isCorrect: true },
                { text: "Chlorid-Ion (Cl⁻)", isCorrect: false, error: "Cl⁻ ist das Gegenion und neutral." }
            ]
        }
    },
    {
        id: "stoff_loesung",
        title: "3. Stoff vs. Lösung",
        content: `
            <p>Es ist wichtig, zwischen dem reinen Stoff und seiner wässrigen Lösung zu unterscheiden.</p>
            <div class="callout error">
                <div class="callout-title">⚠️ Häufiger Fehler</div>
                Oft wird "Säure" und "saure Lösung" als Synonym verwendet. Das ist chemisch unpräzise!
            </div>
            <ul>
                <li><strong>Säure / Base (Stoff):</strong> Der Reinstoff, z. B. Chlorwasserstoff-Gas (HCl) oder festes Natriumhydroxid (NaOH). In diesem Zustand messen wir keinen pH-Wert.</li>
                <li><strong>Saure / basische Lösung:</strong> Das Gemisch, das entsteht, wenn der Stoff mit Wasser reagiert. Erst durch die Bildung von H₃O⁺- oder OH⁻-Ionen wird die Lösung sauer oder basisch. Z.B. "Salzsäure" ist die wässrige Lösung des Gases HCl.</li>
            </ul>
        `,
        quiz: {
            question: "Was ist 'Salzsäure' im chemischen Sinne?",
            options: [
                { text: "Der Reinstoff Chlorwasserstoff (HCl)", isCorrect: false, error: "Das ist das reine Gas (die Säure), aber keine Lösung." },
                { text: "Eine wässrige Lösung, die H₃O⁺ und Cl⁻ Ionen enthält", isCorrect: true },
                { text: "Flüssiges Wasserstoffgas", isCorrect: false }
            ]
        }
    },
    {
        id: "molekuelbau",
        title: "4. Acidität und Molekülbau",
        content: `
            <p>Warum geben manche Moleküle leicht Protonen ab (starke Säuren), während andere es kaum tun?</p>
            <p>Die <strong>Acidität</strong> (Säurestärke) und Basenstärke hängt stark vom Molekülbau ab:</p>
            <ol>
                <li><strong>Elektronegativität:</strong> Je polarer die Bindung zum Wasserstoffatom, desto leichter kann sich das H⁺-Ion abspalten. (Z.B. H-Cl ist stärker polar als H-C, deshalb ist HCl sauer und CH₄ nicht).</li>
                <li><strong>Atomgröße & Bindungslänge:</strong> Bei längeren und schwächeren Bindungen löst sich das Proton leichter (HI ist stärkere Säure als HF, da die H-I Bindung viel länger ist).</li>
                <li><strong>Stabilität des Säurerest-Ions:</strong> Wird die negative Ladung des entstehenden Ions (z.B. durch Mesomerie/Delokalisierung) gut stabilisiert, gibt das Molekül das Proton bereitwilliger ab.</li>
            </ol>
        `,
        quiz: {
            question: "Welcher Faktor erleichtert die Abspaltung eines Protons (hohe Acidität)?",
            options: [
                { text: "Eine unpolare C-H Bindung", isCorrect: false, error: "Unpolare Bindungen spalten keine H⁺-Ionen ab." },
                { text: "Eine kurze und extrem starke H-F Bindung", isCorrect: false, error: "Starke Bindungen verhindern die Abspaltung. HF ist schwächer als HCl." },
                { text: "Eine hohe Polarität der H-X Bindung und Stabilität des Restions", isCorrect: true }
            ]
        }
    },
    {
        id: "salze",
        title: "5. Sauer & basisch wirkende Salze",
        content: `
            <p>Salzlösungen sind nicht immer pH-neutral! Manche Ionen können mit Wasser als Säure oder Base reagieren.</p>
            <div class="visualization-container">
                <p><strong>Sauer wirkendes Salz:</strong> Ammoniumchlorid (NH₄Cl)</p>
                <div class="equation-row">
                    NH₄⁺ + H₂O ⇌ NH₃ + <span class="proton">H₃O⁺</span>
                </div>
            </div>
            <p>Das Ammonium-Ion (NH₄⁺) ist eine schwache Säure und gibt ein Proton an Wasser ab.</p>
            <div class="visualization-container" style="border-color: var(--primary);">
                <p><strong>Basisch wirkendes Salz:</strong> Natriumcarbonat (Na₂CO₃)</p>
                <div class="equation-row">
                    CO₃²⁻ + H₂O ⇌ HCO₃⁻ + <span class="proton" style="color:var(--accent)">OH⁻</span>
                </div>
            </div>
            <p>Das Carbonat-Ion (CO₃²⁻) ist eine Base und nimmt ein Proton von Wasser auf.</p>
        `,
        quiz: {
            question: "Warum reagiert eine Lösung von Natriumacetat (NaCH₃COO) leicht basisch?",
            options: [
                { text: "Weil Natriumionen OH⁻ bilden.", isCorrect: false, error: "Na⁺ Ionen reagieren in Wasser neutral." },
                { text: "Das Acetat-Ion (CH₃COO⁻) nimmt ein Proton vom Wasser auf, wobei OH⁻ entsteht.", isCorrect: true },
                { text: "Weil das Salz stark alkalisch riechst.", isCorrect: false }
            ]
        }
    },
    {
        id: "ampholyte",
        title: "6. Ampholyte",
        content: `
            <p>Manche Teilchen können sowohl Protonen aufnehmen als auch abgeben. Sie heißen <strong>Ampholyte</strong>.</p>
            <p>Das wichtigste Beispiel ist Wasser (H₂O):</p>
            <ul>
                <li>Als <strong>Base</strong>: reagiert mit HCl zu H₃O⁺.</li>
                <li>Als <strong>Säure</strong>: reagiert mit NH₃ zu OH⁻.</li>
            </ul>
            <div class="callout">
                <div class="callout-title">💧 Weitere Ampholyte</div>
                Ionen aus mehrprotonigen Säuren, z.B. Hydrogencarbonat (HCO₃⁻) oder Dihydrogenphosphat (H₂PO₄⁻). Sie haben immer <strong>mindestens ein abspaltbares H-Atom</strong> und eine <strong>negative Ladung / freies Elektronenpaar</strong>.
            </div>
        `,
        quiz: {
            question: "Welche Eigenschaft macht ein Teilchen zum Ampholyt?",
            options: [
                { text: "Er ist zwingend flüssig wie Wasser.", isCorrect: false },
                { text: "Er kann sowohl als Protonendonator als auch als Protonenakzeptor wirken.", isCorrect: true },
                { text: "Er hat einen neutralen pH-Wert von 7.", isCorrect: false, error: "Ampholytlösungen wie NaHCO3 können je nach Gleichgewicht leicht basisch oder sauer sein." }
            ]
        }
    },
    {
        id: "neutralisation",
        title: "7. Umkehrbarkeit & Neutralisation",
        content: `
            <p>Protolyse-Reaktionen sind meist <strong>umkehrbar</strong> und führen zu einem chemischen Gleichgewicht (⇌).</p>
            <h3>Die Neutralisation</h3>
            <p>Wenn eine saure und eine basische Lösung im richtigen Verhältnis vermischt werden, neutralisieren sie sich. Die eigentliche Neutralisationsreaktion ist die Kombination von Oxonium- und Hydroxidionen zu Wasser:</p>
            <div class="visualization-container">
                <div class="equation-row" style="font-weight:bold;">
                    H₃O⁺ + OH⁻ ⟶ 2 H₂O
                </div>
                <p>Diese Reaktion ist <strong>exotherm</strong> (setzt Wärmeenergie frei).</p>
            </div>
            <p>Das verbleibende Metallkation (aus der Base) und der Säurerest ergeben zusammen gelöstes <strong>Salz</strong>.</p>
        `,
        quiz: {
            question: "Was ist die entscheidende Teilchenreaktion bei einer typischen Neutralisation?",
            options: [
                { text: "Reaktion von Säurerestionen mit Metallkationen", isCorrect: false, error: "Diese bilden lediglich das gelöste Salz, sind aber für die pH-Änderung nicht ausschlaggebend." },
                { text: "Sauerstoff und Wasserstoff reagieren zu Wasser", isCorrect: false },
                { text: "Oxonium-Ionen reagieren mit Hydroxid-Ionen zu Wasserstoffbrücken.. ähm, zu Wasser (H₃O⁺ + OH⁻ ⟶ 2 H₂O)", isCorrect: true }
            ]
        }
    }
];

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
    initNav();
    renderTopic(0);
});

function initNav() {
    const navMenu = document.getElementById("topic-nav");
    navMenu.innerHTML = '';
    
    TOPICS.forEach((topic, index) => {
        const item = document.createElement("div");
        item.className = "nav-item";
        item.innerHTML = `
            ${topic.title}
            <span class="nav-status" id="status-${index}"></span>
        `;
        item.onclick = () => renderTopic(index);
        navMenu.appendChild(item);
    });
}

function updateNavHighlight(index) {
    const items = document.querySelectorAll(".nav-item");
    items.forEach((item, i) => {
        if (i === index) item.classList.add("active");
        else item.classList.remove("active");
    });
}

function updateProgress() {
    const total = TOPICS.length;
    const completed = state.completedQuizzes.size;
    const pct = (completed / total) * 100;
    document.getElementById("app-progress").style.width = `${pct}%`;
    document.getElementById("score-display").innerText = `${state.score}`;
}

function renderTopic(index) {
    state.currentTopicIndex = index;
    const topic = TOPICS[index];
    updateNavHighlight(index);
    
    const container = document.getElementById("content-area");
    
    // Check if user already completed this quiz
    const isCompleted = state.completedQuizzes.has(index);
    
    let quizHtml = '';
    if (topic.quiz) {
        let optionsHtml = topic.quiz.options.map((opt, i) => {
            return `<button class="option-btn" onclick="handleAnswer(${i})">${opt.text}</button>`;
        }).join('');
        
        quizHtml = `
            <div class="quiz-section">
                <div class="quiz-question">🏁 Quiz: ${topic.quiz.question}</div>
                <div class="options-grid" id="quiz-options">
                    ${optionsHtml}
                </div>
                <div id="quiz-feedback"></div>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="content-card">
            <h2 class="card-title">${topic.title}</h2>
            <div class="content-body">
                ${topic.content}
            </div>
            ${quizHtml}
            
            <div style="text-align: right; margin-top: 32px;">
                <button class="btn-primary" id="btn-next" onclick="nextTopic()" ${!isCompleted ? 'style="display:none;"' : ''}>
                    Weiter ➔
                </button>
            </div>
        </div>
    `;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleAnswer(optionIndex) {
    const topic = TOPICS[state.currentTopicIndex];
    const quiz = topic.quiz;
    const selected = quiz.options[optionIndex];
    
    const btns = document.querySelectorAll("#quiz-options .option-btn");
    btns.forEach(b => b.disabled = true); // Disable after guess
    
    if (selected.isCorrect) {
        btns[optionIndex].classList.add("correct", "selected");
        showToast("Richtig gemerkt! 🎉");
        
        // Update Game State
        if (!state.completedQuizzes.has(state.currentTopicIndex)) {
            state.score += 10;
            state.streak += 1;
            state.completedQuizzes.add(state.currentTopicIndex);
            document.getElementById(`status-${state.currentTopicIndex}`).innerText = '✅';
        }
        
        document.getElementById("btn-next").style.display = "inline-flex";
        
    } else {
        btns[optionIndex].classList.add("incorrect", "selected");
        
        // Highlight correct answer
        const correctIndex = quiz.options.findIndex(o => o.isCorrect);
        btns[correctIndex].classList.add("correct");
        
        state.streak = 0; // Lost streak
        
        let feedbackHtml = `
            <div class="callout error" style="margin-top: 16px;">
                <div class="callout-title">⚠️ Fehlerteufel</div>
                ${selected.error || 'Diese Antwort ist leider nicht korrekt.'}
            </div>
        `;
        document.getElementById("quiz-feedback").innerHTML = feedbackHtml;
        
        showToast("Leider falsch!");
        
        // We still allow user to continue
        document.getElementById("btn-next").style.display = "inline-flex";
        state.completedQuizzes.add(state.currentTopicIndex);
    }
    
    updateProgress();
}

function nextTopic() {
    if (state.currentTopicIndex < TOPICS.length - 1) {
        renderTopic(state.currentTopicIndex + 1);
    } else {
        showCompletionCard();
    }
}

function showCompletionCard() {
    state.currentTopicIndex = -1;
    updateNavHighlight(-1);
    
    const container = document.getElementById("content-area");
    container.innerHTML = `
        <div class="content-card" style="text-align: center;">
            <div style="font-size: 4rem; margin-bottom: 16px;">🎓</div>
            <h2 class="card-title" style="justify-content: center;">Applaus!</h2>
            <p style="font-size: 1.2rem;">Du hast alle Grundlagen der Brønsted Säure-Base Theorie gemeistert.</p>
            
            <div style="margin: 32px 0; background: var(--neutral-100); padding: 24px; border-radius: 12px;">
                <div style="font-size: 2rem; color: var(--primary); font-weight: bold;">${state.score} / 70 Punkte</div>
                <div>Dein Chemie-XP</div>
            </div>
            
            <button class="btn-primary" onclick="resetApp()">Nochmal Üben</button>
        </div>
    `;
}

function resetApp() {
    state.score = 0;
    state.streak = 0;
    state.completedQuizzes.clear();
    TOPICS.forEach((t, i) => {
        const statEl = document.getElementById(`status-${i}`);
        if(statEl) statEl.innerText = '';
    });
    updateProgress();
    renderTopic(0);
}

// Toast System
let toastTimeout;
function showToast(msg) {
    const container = document.getElementById("toast-container");
    const label = document.getElementById("toast-message");
    
    clearTimeout(toastTimeout);
    
    label.innerText = msg;
    container.classList.remove("hidden");
    
    toastTimeout = setTimeout(() => {
        container.classList.add("hidden");
    }, 3000);
}
