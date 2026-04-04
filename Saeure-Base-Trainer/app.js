/**
 * Säure-Base-Trainer (Brønsted)
 * Architektur nach modernen Best Practices (ES6 Classes, Separation of Concerns).
 * 
 * Beinhaltet:
 * 1. Data Models (TOPICS_DATA)
 * 2. ThemeManager (Dark/Light Mode)
 * 3. MiniGame (Interaktives Drop-Game)
 * 4. QuizManager (Single-Choice Checks)
 * 5. AppController (Orchestrierung und UI Rendering)
 */

const TOPICS_DATA = [
    {
        id: "broensted",
        title: "1. Brønsted-Theorie",
        content: `
            <p>Die klassische Säure-Base-Theorie nach Arrhenius wurde durch Johannes Nicolaus Brønsted und Thomas Martin Lowry erweitert. Diese Theorie legt den Fokus auf die Übertragung von Protonen (Wasserstoff-Ionen, H⁺).</p>
            <div class="proton-transfer-scene" style="margin: 32px 0;">
                <div class="block-entity" style="border-color: var(--error);">
                    SÄURE
                    <div class="proton-circle">H⁺</div>
                </div>
                <div style="font-size: 2rem; opacity: 0.5;">⇌</div>
                <div class="block-entity" style="border-color: var(--accent);">
                    BASE
                </div>
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
            question: "Was macht ein Teilchen nach Brønsted zu einer Base?",
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
            
            <p><strong>Sauer wirkendes Salz:</strong> Ammoniumchlorid (NH₄Cl)</p>
            <div class="solution-scene">
                <div class="crystal-block">NH₄Cl (s)</div>
                <div class="ion-block ion-cation ion-split-left">NH₄⁺ (aq)</div>
                <div class="ion-block ion-anion ion-split-right">Cl⁻ (aq)</div>
            </div>
            <div class="equation-row">
                NH₄⁺ + H₂O ⇌ NH₃ + <span class="proton">H₃O⁺</span>
            </div>
            <p style="margin-bottom: 24px;">Das Ammonium-Ion (NH₄⁺) ist eine schwache Säure und gibt ein Proton an Wasser ab.</p>
            
            <p><strong>Basisch wirkendes Salz:</strong> Natriumcarbonat (Na₂CO₃)</p>
            <div class="solution-scene">
                <div class="crystal-block">Na₂CO₃ (s)</div>
                <div class="ion-block ion-cation ion-split-left">2 Na⁺ (aq)</div>
                <div class="ion-block ion-anion ion-split-right" style="background:var(--accent-light); color:var(--neutral-900);">CO₃²⁻ (aq)</div>
            </div>
            <div class="equation-row">
                CO₃²⁻ + H₂O ⇌ HCO₃⁻ + <span class="proton" style="color:var(--accent)">OH⁻</span>
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
                { text: "Es ist zwingend flüssig wie Wasser.", isCorrect: false },
                { text: "Es kann sowohl als Protonendonator als auch als Protonenakzeptor wirken.", isCorrect: true },
                { text: "Es hat einen neutralen pH-Wert von 7.", isCorrect: false, error: "Ampholytlösungen wie NaHCO3 können je nach Gleichgewicht leicht basisch oder sauer sein." }
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
            
            <div class="neutralization-scene">
                <div class="ion-block ion-h3o">H₃O⁺</div>
                <div class="ion-block ion-oh">OH⁻</div>
                <div class="flash-bang">💥</div>
                <div class="water-molecule wm-left">H₂O</div>
                <div class="water-molecule wm-right">H₂O</div>
            </div>
            
            <div class="equation-row" style="font-weight:bold;">
                H₃O⁺ + OH⁻ ⟶ 2 H₂O
            </div>
            <p>Diese Reaktion ist <strong>exotherm</strong> (setzt Wärmeenergie frei).</p>
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
    },
    {
        id: "minigame",
        title: "8. Minispiel: Drop-Game",
        content: `
            <p>Wende dein Wissen spielerisch an! Handelt es sich bei dem gezeigten Teilchen eher um eine typische Brønsted-Säure oder Base?</p>
            <div class="game-container" id="game-root">
                <div class="game-score-row">
                    <span>Partikel <span id="game-round-count">1</span>/10</span>
                    <span>Punkte: <span id="game-score">0</span></span>
                </div>
                <div class="game-molecule" id="game-target">...</div>
                <div class="game-controls">
                    <button class="game-btn btn-acid" id="btn-guess-acid">Ist Säure</button>
                    <button class="game-btn btn-base" id="btn-guess-base">Ist Base</button>
                </div>
            </div>
        `
    }
];


/**
 * @class ThemeManager
 * Handhabt den Dark/Light Mode. LocalStorage + Fallback zur Systempräferenz.
 */
class ThemeManager {
    constructor() {
        this.toggleBtn = document.getElementById('theme-toggle');
        this.iconPath = document.getElementById('theme-icon-path');
        this.init();
    }
    
    init() {
        if (!this.toggleBtn || !this.iconPath) return;

        const stored = localStorage.getItem('ab-theme');
        const isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        this.setTheme(isDark);
        
        this.toggleBtn.addEventListener('click', () => {
            const currentlyDark = document.documentElement.getAttribute('data-theme') === 'dark';
            this.setTheme(!currentlyDark);
        });
    }

    setTheme(isDark) {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('ab-theme', isDark ? 'dark' : 'light');
        
        // Update SVG Path for Sun/Moon
        if (isDark) {
            // Sun Icon
            this.iconPath.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z');
        } else {
            // Moon Icon
            this.iconPath.setAttribute('d', 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z');
        }
    }
}


/**
 * @class ToastService
 * Ein globaler Service für Popups/Feedback.
 */
class ToastService {
    constructor() {
        this.container = document.getElementById('toast-container');
        this.message = document.getElementById('toast-message');
        this.timeout = null;
    }

    show(msg, duration = 3000) {
        if (!this.container || !this.message) return;
        
        clearTimeout(this.timeout);
        this.message.innerText = msg;
        this.container.classList.remove('hidden');
        
        this.timeout = setTimeout(() => {
            this.container.classList.add('hidden');
        }, duration);
    }
}
const toast = new ToastService();


/**
 * @class MiniGame
 * Handhabt die Logik des Säure/Base Klassifizierungs-Spiels.
 */
class MiniGame {
    constructor(appRef) {
        this.appRef = appRef; // Reference to main app for updating total score
        this.items = [
            { label: "HCl", type: "Säure" }, { label: "NaOH", type: "Base" }, 
            { label: "H₂SO₄", type: "Säure" }, { label: "NH₃", type: "Base" }, 
            { label: "H₃O⁺", type: "Säure" }, { label: "OH⁻", type: "Base" }, 
            { label: "HNO₃", type: "Säure" }, { label: "CO₃²⁻", type: "Base" }, 
            { label: "NH₄⁺", type: "Säure" }, { label: "CH₃COO⁻", type: "Base" }
        ];
        this.state = { active: false, questions: [], currentIndex: 0, score: 0 };
    }

    init() {
        this.state.questions = [...this.items].sort(() => Math.random() - 0.5);
        this.state.currentIndex = 0;
        this.state.score = 0;
        this.state.active = true;
        this.bindEvents();
        this.updateUI();
    }

    bindEvents() {
        const btnAcid = document.getElementById("btn-guess-acid");
        const btnBase = document.getElementById("btn-guess-base");
        
        // Remove old listeners to prevent bubbling (via clone)
        if (btnAcid && btnBase) {
            const newBtnAcid = btnAcid.cloneNode(true);
            const newBtnBase = btnBase.cloneNode(true);
            btnAcid.parentNode.replaceChild(newBtnAcid, btnAcid);
            btnBase.parentNode.replaceChild(newBtnBase, btnBase);

            newBtnAcid.addEventListener('click', () => this.handleAnswer('Säure'));
            newBtnBase.addEventListener('click', () => this.handleAnswer('Base'));
        }
    }

    handleAnswer(guessType) {
        if (!this.state.active || this.state.currentIndex >= this.state.questions.length) return;
        
        const currentItem = this.state.questions[this.state.currentIndex];
        const targetEl = document.getElementById("game-target");
        
        if (currentItem.type === guessType) {
            this.state.score += 10;
            this.appRef.addScore(10);
            toast.show("Richtig! +10");
            targetEl.style.color = "var(--success)";
            targetEl.style.transform = "scale(1.2)";
        } else {
            this.appRef.resetStreak();
            toast.show("Falsch! Es war " + currentItem.type);
            targetEl.style.color = "var(--error)";
            targetEl.style.transform = "translateX(20px)";
        }
        
        this.state.currentIndex++;
        
        setTimeout(() => {
            if (targetEl) {
                targetEl.style.color = "var(--primary)";
                targetEl.style.transform = "none";
            }
            this.updateUI();
        }, 600);
    }

    updateUI() {
        const targetEl = document.getElementById("game-target");
        if (!targetEl) return;
        
        if (this.state.currentIndex >= this.state.questions.length) {
            targetEl.innerText = "Ende!";
            targetEl.style.fontSize = "2rem";
            this.state.active = false;
            toast.show("Minispiel beendet!");
            this.appRef.markQuizCompleted(7);
        } else {
            document.getElementById("game-round-count").innerText = (this.state.currentIndex + 1);
            document.getElementById("game-score").innerText = this.state.score;
            targetEl.innerText = this.state.questions[this.state.currentIndex].label;
        }
    }
}


/**
 * @class AppController 
 * Hauptklasse der Anwendung. Registriert Navigation, States und Events.
 */
class AppController {
    constructor() {
        this.topics = TOPICS_DATA;
        this.state = {
            currentIndex: 0,
            score: 0,
            streak: 0,
            completed: new Set() // stores topic indices
        };
        this.miniGame = new MiniGame(this);
    }

    init() {
        this.renderSidebar();
        this.renderTopic(0);
        this.updateHeaderProgress();
    }

    renderSidebar() {
        const navMenu = document.getElementById("topic-nav");
        if (!navMenu) return;
        
        navMenu.innerHTML = '';
        this.topics.forEach((topic, index) => {
            const item = document.createElement("div");
            item.className = "nav-item";
            item.id = `nav-item-${index}`;
            item.innerHTML = `
                ${topic.title}
                <span class="nav-status" id="status-${index}"></span>
            `;
            item.addEventListener('click', () => this.renderTopic(index));
            navMenu.appendChild(item);
        });
    }

    updateSidebarSelection(activeIndex) {
        document.querySelectorAll(".nav-item").forEach((item, i) => {
            item.classList.toggle("active", i === activeIndex);
        });
    }

    updateHeaderProgress() {
        const pct = (this.state.completed.size / this.topics.length) * 100;
        document.getElementById("app-progress").style.width = `${pct}%`;
        document.getElementById("score-display").innerText = this.state.score;
    }

    addScore(points) {
        this.state.score += points;
        this.updateHeaderProgress();
    }

    resetStreak() {
        this.state.streak = 0;
    }

    markQuizCompleted(topicIndex) {
        if (!this.state.completed.has(topicIndex)) {
            this.state.completed.add(topicIndex);
            
            const statusEl = document.getElementById(`status-${topicIndex}`);
            if (statusEl) statusEl.innerText = '✅';
            
            this.updateHeaderProgress();
        }
        
        const nextBtn = document.getElementById("btn-next");
        if (nextBtn) nextBtn.style.display = "inline-flex";
    }

    renderTopic(index) {
        this.state.currentIndex = index;
        const topic = this.topics[index];
        this.updateSidebarSelection(index);
        
        const container = document.getElementById("content-area");
        if (!container) return;
        
        const isCompleted = this.state.completed.has(index);
        
        // Build Quiz HTML (if pure quiz)
        let quizHtml = '';
        if (topic.quiz) {
            const optionsHtml = topic.quiz.options.map((opt, i) => {
                return `<button class="option-btn" id="opt-btn-${i}">${opt.text}</button>`;
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

        // Output complete Content Card
        container.innerHTML = `
            <div class="content-card">
                <h2 class="card-title">${topic.title}</h2>
                <div class="content-body">
                    ${topic.content}
                </div>
                ${quizHtml}
                
                <div style="text-align: right; margin-top: 32px;">
                    <button class="btn-primary" id="btn-next" style="display: ${isCompleted ? 'inline-flex' : 'none'}">
                        Weiter ➔
                    </button>
                </div>
            </div>
        `;
        
        // Bind Quiz Logic dynamically to avoid inline events
        if (topic.quiz) {
            topic.quiz.options.forEach((opt, i) => {
                document.getElementById(`opt-btn-${i}`).addEventListener('click', () => {
                    this.handleQuizAnswer(i, topic.quiz);
                });
            });
        }
        
        // Event for Next Button
        document.getElementById("btn-next").addEventListener('click', () => {
             if (this.state.currentIndex < this.topics.length - 1) {
                 this.renderTopic(this.state.currentIndex + 1);
             } else {
                 this.renderCompletionScreen();
             }
        });
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Init Minigame automatically if it's the game topic
        if (topic.id === "minigame") {
            setTimeout(() => this.miniGame.init(), 100);
        }
    }

    handleQuizAnswer(optionIndex, quiz) {
        const selected = quiz.options[optionIndex];
        const btns = document.querySelectorAll("#quiz-options .option-btn");
        
        // Block interaction after first click
        btns.forEach(b => { b.disabled = true; b.style.pointerEvents = 'none'; }); 
        
        if (selected.isCorrect) {
            btns[optionIndex].classList.add("correct", "selected");
            toast.show("Richtig gemerkt! 🎉");
            
            if (!this.state.completed.has(this.state.currentIndex)) {
                this.state.score += 10;
                this.state.streak += 1;
                this.markQuizCompleted(this.state.currentIndex);
            }
            
        } else {
            btns[optionIndex].classList.add("incorrect", "selected");
            
            // Highlight correct one automatically
            const correctIndex = quiz.options.findIndex(o => o.isCorrect);
            btns[correctIndex].classList.add("correct");
            
            this.resetStreak();
            
            const feedbackHtml = `
                <div class="callout error" style="margin-top: 16px;">
                    <div class="callout-title">⚠️ Fehlerteufel</div>
                    ${selected.error || 'Diese Antwort ist leider nicht korrekt.'}
                </div>
            `;
            document.getElementById("quiz-feedback").innerHTML = feedbackHtml;
            
            toast.show("Leider falsch!");
            this.markQuizCompleted(this.state.currentIndex); // allow advance anyway
        }
    }

    renderCompletionScreen() {
        this.state.currentIndex = -1;
        this.updateSidebarSelection(-1);
        
        const container = document.getElementById("content-area");
        container.innerHTML = `
            <div class="content-card" style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 16px;">🎓</div>
                <h2 class="card-title" style="justify-content: center;">Applaus!</h2>
                <p style="font-size: 1.2rem;">Du hast alle Grundlagen der Brønsted Säure-Base Theorie gemeistert.</p>
                
                <div style="margin: 32px 0; background: var(--neutral-100); padding: 24px; border-radius: 12px; transition: background 0.3s;">
                    <div style="font-size: 2rem; color: var(--primary); font-weight: bold;">${this.state.score} Punkte / Maximum XP</div>
                    <div>Dein Chemie-Erfolg🚀</div>
                </div>
                
                <button class="btn-primary" id="btn-restart">Nochmal Üben</button>
            </div>
        `;
        
        document.getElementById("btn-restart").addEventListener('click', () => this.resetApp());
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    resetApp() {
        this.state.score = 0;
        this.state.streak = 0;
        this.state.completed.clear();
        
        this.topics.forEach((t, i) => {
            const statEl = document.getElementById(`status-${i}`);
            if(statEl) statEl.innerText = '';
        });
        
        this.updateHeaderProgress();
        this.renderTopic(0);
    }
}

// Bootstrap Application
document.addEventListener("DOMContentLoaded", () => {
    new ThemeManager();
    const app = new AppController();
    app.init();
});
