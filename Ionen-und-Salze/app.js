/**
 * Ionen & Salze Trainer
 * =====================
 * Architektur: ES6-Klassen, Separation of Concerns.
 * 
 * Struktur:
 * 1. TOPICS_DATA – Lehrinhalte, Visualisierungen, Quiz-Daten
 * 2. ThemeManager – Dark/Light Mode
 * 3. ToastService – Feedback-Popups
 * 4. MiniGame – Formel ↔ Name Zuordnungs-Spiel
 * 5. AppController – Navigation, Rendering, Score
 */

/* ============================================================
   1. TOPICS_DATA
   ============================================================ */
const TOPICS_DATA = [
    /* ───────── Topic 0: Was sind Ionen? ───────── */
    {
        id: "ionen_einfuehrung",
        title: "1. Was sind Ionen?",
        content: `
            <p>Ein <strong>Ion</strong> ist ein elektrisch geladenes Teilchen, das entsteht, wenn ein Atom Elektronen aufnimmt oder abgibt. Ionen sind <strong>keine Atome</strong> – sie haben eine Ladung!</p>

            <h3>Atom → Ion</h3>
            <p>Metalle geben Elektronen ab und werden zu <strong>Kationen</strong> (positiv geladen).<br>
            Nichtmetalle nehmen Elektronen auf und werden zu <strong>Anionen</strong> (negativ geladen).</p>

            <div class="ion-vis-container">
                <div class="atom-ion-compare">
                    <div class="particle-card">
                        <div class="particle-sphere neutral">Li</div>
                        <div class="particle-label">Lithium-Atom<br>3 p⁺, 3 e⁻ → neutral</div>
                    </div>
                    <div style="font-size:2rem;color:var(--primary);font-weight:700;">→ −1 e⁻ →</div>
                    <div class="particle-card">
                        <div class="particle-sphere cation">Li<span class="charge-badge">+</span></div>
                        <div class="particle-label">Lithium-<strong>Ion</strong><br>3 p⁺, 2 e⁻ → positiv</div>
                    </div>
                </div>
            </div>

            <div class="callout">
                <div class="callout-title">💡 Wichtiger Unterschied</div>
                Ein Lithium-<strong>Atom</strong> (Li) ist elektrisch neutral. Ein Lithium-<strong>Ion</strong> (Li⁺) hat ein Elektron weniger und ist positiv geladen. Be²⁺ hat sogar zwei Elektronen abgegeben!
            </div>

            <h3>Warum sind Ionen wichtig?</h3>
            <p>Ionen sind <strong>bewegliche Ladungsträger</strong>. Eine Substanz leitet den elektrischen Strom, wenn bewegliche Ladungsträger vorhanden sind – das ist bei gelösten oder geschmolzenen Ionen der Fall!</p>
        `,
        quiz: {
            question: "Was unterscheidet ein Ion von einem Atom?",
            options: [
                { text: "Ein Ion hat eine andere Anzahl an Protonen.", isCorrect: false, error: "Die Protonenzahl ändert sich nicht – sonst wäre es ein anderes Element! Nur die Elektronenzahl ändert sich." },
                { text: "Ein Ion hat eine andere Anzahl an Elektronen und damit eine elektrische Ladung.", isCorrect: true },
                { text: "Ionen sind einfach größere Atome.", isCorrect: false, error: "Die Größe kann sich ändern, aber das ist nicht das entscheidende Merkmal. Ionen haben eine Ladung!" }
            ]
        }
    },

    /* ───────── Topic 1: Aufbau von Salzen ───────── */
    {
        id: "aufbau_salze",
        title: "2. Aufbau von Salzen",
        content: `
            <p>Salze bestehen aus zwei Arten von Ionen:</p>
            <ul>
                <li><strong>Kationen</strong> (positiv geladen) – meist <strong>Metall</strong>-Ionen, z. B. Na⁺, Ca²⁺, Al³⁺</li>
                <li><strong>Anionen</strong> (negativ geladen) – meist <strong>Nichtmetall</strong>-Ionen, z. B. Cl⁻, O²⁻, S²⁻</li>
            </ul>

            <div class="ion-vis-container">
                <div class="atom-ion-compare">
                    <div class="particle-card">
                        <div class="particle-sphere cation">Na<span class="charge-badge">+</span></div>
                        <div class="particle-label">Natrium-Kation<br>(Metall-Ion)</div>
                    </div>
                    <div style="font-size:2.5rem;font-weight:700;color:var(--neutral-800);">+</div>
                    <div class="particle-card">
                        <div class="particle-sphere anion">Cl<span class="charge-badge">−</span></div>
                        <div class="particle-label">Chlorid-Anion<br>(Nichtmetall-Ion)</div>
                    </div>
                    <div style="font-size:2.5rem;font-weight:700;color:var(--neutral-800);">→</div>
                    <div class="particle-card">
                        <div class="particle-sphere" style="background: linear-gradient(135deg, #ef4444 50%, #3b82f6 50%); color: white; font-size:1.1rem;">NaCl</div>
                        <div class="particle-label"><strong>Natriumchlorid</strong><br>(Kochsalz)</div>
                    </div>
                </div>
            </div>

            <div class="callout">
                <div class="callout-title">🔑 Merke</div>
                In einem Salz ist die Summe aller positiven Ladungen gleich der Summe aller negativen Ladungen → das Salz ist insgesamt <strong>elektrisch neutral</strong>.
            </div>
        `,
        quiz: {
            question: "Woraus bestehen Salze?",
            options: [
                { text: "Aus Molekülen wie bei Wasser.", isCorrect: false, error: "Salze bestehen NICHT aus Molekülen, sondern aus Ionen! Es gibt im Salzkristall keine einzelnen NaCl-Moleküle." },
                { text: "Aus Metall-Kationen und Nichtmetall-Anionen, die sich gegenseitig anziehen.", isCorrect: true },
                { text: "Aus neutralen Atomen in einem festen Gitter.", isCorrect: false, error: "Die Teilchen im Salz sind geladen (Ionen), nicht neutral!" }
            ]
        }
    },

    /* ───────── Topic 2: Ionengitter & Ionenbindung ───────── */
    {
        id: "ionengitter",
        title: "3. Ionengitter & Ionenbindung",
        content: `
            <p>Ionen ordnen sich in einem regelmäßigen, dreidimensionalen Muster an – dem <strong>Ionengitter</strong> (auch Kristallgitter).</p>
            <p>Die Anziehungskraft zwischen entgegengesetzt geladenen Ionen heißt <strong>Ionenbindung</strong> (elektrostatische Anziehung). Sie wirkt in alle Richtungen und ist sehr stark.</p>

            <div class="ion-vis-container">
                <p style="font-weight:600;margin-bottom:12px;">Ionengitter von NaCl (vereinfachte 2D-Darstellung)</p>
                <div class="lattice-grid" id="lattice-nacl">
                    <!-- Generated by JS -->
                </div>
                <p style="margin-top:12px;font-size:0.9rem;opacity:0.7;">🔴 Na⁺ &nbsp; 🔵 Cl⁻ &nbsp;— sich abwechselnd angeordnet</p>
            </div>

            <ul>
                <li>Jedes Ion ist von <strong>Gegenionen</strong> umgeben → maximale Anziehung.</li>
                <li>Gleichnamig geladene Ionen sind möglichst weit voneinander entfernt → minimale Abstoßung.</li>
                <li>Es gibt <strong>keine einzelnen Moleküle</strong> im Ionengitter!</li>
            </ul>

            <div class="callout">
                <div class="callout-title">💡 Ungerichtet</div>
                Die Ionenbindung ist <strong>ungerichtet</strong> – jedes Ion zieht alle Gegenionen in seiner Umgebung an, nicht nur eines.
            </div>
        `,
        quiz: {
            question: "Warum gibt es im Ionengitter keine einzelnen Moleküle?",
            options: [
                { text: "Weil die Ionen flüssig sind.", isCorrect: false, error: "Im festen Salzkristall sind Ionen NICHT flüssig – sie sind fest angeordnet im Gitter." },
                { text: "Weil jedes Ion von mehreren Gegenionen umgeben ist und die Bindung ungerichtet in alle Richtungen wirkt.", isCorrect: true },
                { text: "Weil Salze nur aus einem Element bestehen.", isCorrect: false, error: "Salze bestehen aus mindestens zwei verschiedenen Elementen (Metall + Nichtmetall)." }
            ]
        }
    },

    /* ───────── Topic 3: Modelle für das Ionengitter ───────── */
    {
        id: "modelle_gitter",
        title: "4. Modelle des Ionengitters",
        content: `
            <p>Es gibt zwei wichtige Modelle, um ein Ionengitter darzustellen:</p>

            <h3>1. Kugelpackungsmodell (Raumfüllend)</h3>
            <p>Die Ionen werden als dichte Kugeln dargestellt, die sich berühren. Dieses Modell zeigt die <strong>tatsächlichen Größenverhältnisse</strong>.</p>
            <div class="ion-vis-container">
                <div class="packing-container">
                    <div class="packing-row">
                        <div class="packing-sphere cat-pack"></div>
                        <div class="packing-sphere an-pack"></div>
                        <div class="packing-sphere cat-pack"></div>
                        <div class="packing-sphere an-pack"></div>
                    </div>
                    <div class="packing-row offset">
                        <div class="packing-sphere an-pack"></div>
                        <div class="packing-sphere cat-pack"></div>
                        <div class="packing-sphere an-pack"></div>
                        <div class="packing-sphere cat-pack"></div>
                    </div>
                    <div class="packing-row">
                        <div class="packing-sphere cat-pack"></div>
                        <div class="packing-sphere an-pack"></div>
                        <div class="packing-sphere cat-pack"></div>
                        <div class="packing-sphere an-pack"></div>
                    </div>
                </div>
                <p style="font-size:0.85rem;opacity:0.7;margin-top:8px;">🔴 Kation &nbsp; 🔵 Anion — dicht gepackt</p>
            </div>

            <h3>2. Gittermodell (Kugel-Stab-Modell)</h3>
            <p>Die Ionen werden als kleine Kugeln dargestellt, verbunden durch Stäbe. Dieses Modell zeigt die <strong>Struktur und Anordnung</strong> besonders übersichtlich.</p>
            <div class="ion-vis-container">
                <div class="lattice-grid" id="lattice-model-view">
                    <!-- JS fills this -->
                </div>
                <p style="font-size:0.85rem;opacity:0.7;margin-top:8px;">Kugel-Stab: Struktur gut sichtbar, Größen nicht maßstabsgetreu</p>
            </div>

            <h3>Vergleich der Modelle</h3>
            <table class="compare-table">
                <thead>
                    <tr><th>Eigenschaft</th><th>Kugelpackungsmodell</th><th>Gittermodell</th></tr>
                </thead>
                <tbody>
                    <tr><td>Größenverhältnis</td><td>✅ Realitätsnah</td><td>❌ Nicht maßstabsgetreu</td></tr>
                    <tr><td>Struktur erkennbar</td><td>❌ Schwer erkennbar</td><td>✅ Sehr übersichtlich</td></tr>
                    <tr><td>Koordinationszahl</td><td>❌ Schwer abzuzählen</td><td>✅ Leicht abzuzählen</td></tr>
                    <tr><td>Raumfüllung</td><td>✅ Zeigt Raumfüllung</td><td>❌ Zeigt Zwischenräume</td></tr>
                </tbody>
            </table>
        `,
        quiz: {
            question: "Welches Modell eignet sich am besten, um die Koordinationszahl (Anzahl direkter Nachbarn) eines Ions zu bestimmen?",
            options: [
                { text: "Das Kugelpackungsmodell, weil es realitätsnah ist.", isCorrect: false, error: "Im Kugelpackungsmodell berühren sich die Kugeln – die Nachbarn sind schwer abzuzählen, weil alles dicht gepackt ist." },
                { text: "Das Gittermodell (Kugel-Stab), weil die Verbindungen gut sichtbar sind.", isCorrect: true },
                { text: "Beide Modelle sind gleich gut geeignet.", isCorrect: false, error: "Nein – das Gittermodell ist hierfür klar im Vorteil." }
            ]
        }
    },

    /* ───────── Topic 4: Verhältnisformeln & Überkreuzregel ───────── */
    {
        id: "verhaeltnisformel",
        title: "5. Verhältnisformeln & Überkreuzregel",
        content: `
            <p>Die Formel eines Salzes gibt das <strong>Verhältnis</strong> von Kationen zu Anionen an – keine einzelnen Moleküle!</p>
            <p>Man nennt sie deshalb <strong>Verhältnisformel</strong> (im Gegensatz zur Molekülformel bei kovalenten Verbindungen).</p>

            <div class="callout">
                <div class="callout-title">💡 Verhältnis- vs. Molekülformel</div>
                <strong>NaCl</strong> = Verhältnisformel → 1:1-Verhältnis, kein einzelnes „NaCl-Molekül".<br>
                <strong>H₂O</strong> = Molekülformel → beschreibt ein konkretes Molekül.
            </div>

            <h3>Die Überkreuzregel</h3>
            <p>Um die Verhältnisformel aufzustellen, nutzt man die <strong>Überkreuzregel</strong>:</p>
            <ol>
                <li>Schreibe Kation und Anion mit ihren Ladungen auf.</li>
                <li><strong>Kreuze die Beträge der Ladungen</strong> als Indizes über.</li>
                <li>Kürze, wenn möglich.</li>
            </ol>

            <div class="ion-vis-container">
                <p style="font-weight:600;margin-bottom:8px;">Beispiel: Aluminium + Sauerstoff</p>
                <div class="cross-rule-box">
                    <div class="cr-element">
                        <span class="cr-charge">3+</span>
                        <span style="font-size:2rem;">Al</span>
                        <span class="cr-index" style="visibility:hidden;">2</span>
                    </div>
                    <div class="cr-element">
                        <span class="cr-charge">2−</span>
                        <span style="font-size:2rem;">O</span>
                        <span class="cr-index" style="visibility:hidden;">3</span>
                    </div>
                    <span style="font-size:2rem;margin-left:24px;color:var(--success);font-weight:700;">→</span>
                    <span style="font-size:2rem;font-weight:700;color:var(--primary);">Al₂O₃</span>
                </div>
                <p style="font-size:0.9rem;margin-top:8px;">Die 3 von Al³⁺ wird zum Index von O, die 2 von O²⁻ zum Index von Al.</p>
            </div>

            <p><strong>Weitere Beispiele:</strong></p>
            <ul>
                <li>Na⁺ + Cl⁻ → <strong>NaCl</strong> (1:1 → Indizes weggelassen)</li>
                <li>Ca²⁺ + Cl⁻ → <strong>CaCl₂</strong> (1:2)</li>
                <li>Mg²⁺ + O²⁻ → <strong>MgO</strong> (2:2 → kürzen zu 1:1)</li>
            </ul>
        `,
        quiz: {
            question: "Wie lautet die Verhältnisformel aus Ca²⁺ und N³⁻ (Nitrid)?",
            options: [
                { text: "CaN", isCorrect: false, error: "Überkreuzregel: Die 3 von N³⁻ wird zum Index von Ca, die 2 von Ca²⁺ zum Index von N → Ca₃N₂" },
                { text: "Ca₃N₂", isCorrect: true },
                { text: "Ca₂N₃", isCorrect: false, error: "Verwechslung! Die Ladungszahl des ANDEREN Ions wird jeweils zum Index. 3 (von N) → Index von Ca; 2 (von Ca) → Index von N." }
            ]
        }
    },

    /* ───────── Topic 5: Molekülionen ───────── */
    {
        id: "molekuelionen",
        title: "6. Molekülionen",
        content: `
            <p>Manche Ionen bestehen nicht aus einem einzelnen Atom, sondern aus <strong>mehreren kovalent gebundenen Atomen</strong>, die zusammen eine Ladung tragen. Man nennt sie <strong>Molekülionen</strong> (oder mehratomige Ionen).</p>

            <div class="mol-ion-display">
                <div class="mol-ion-card">
                    <div class="mol-ion-formula">SO₄²⁻</div>
                    <div class="mol-ion-name">Sulfat-Ion</div>
                </div>
                <div class="mol-ion-card">
                    <div class="mol-ion-formula">NH₄⁺</div>
                    <div class="mol-ion-name">Ammonium-Ion</div>
                </div>
                <div class="mol-ion-card">
                    <div class="mol-ion-formula">OH⁻</div>
                    <div class="mol-ion-name">Hydroxid-Ion</div>
                </div>
            </div>

            <h3>Besondere Molekülionen im Detail</h3>
            <ul>
                <li><strong>Sulfat-Ion (SO₄²⁻):</strong> Zentrales Schwefelatom umgeben von 4 Sauerstoffatomen. Ladung: 2−. Beispiel: CaSO₄ (Gips).</li>
                <li><strong>Ammonium-Ion (NH₄⁺):</strong> Stickstoff mit 4 Wasserstoffen. Einziges häufiges <em>positiv</em> geladenes Molekülion! Beispiel: NH₄Cl (Salmiak).</li>
                <li><strong>Hydroxid-Ion (OH⁻):</strong> Sauerstoff gebunden an Wasserstoff. Ladung: 1−. Beispiel: NaOH (Natronlauge).</li>
            </ul>

            <div class="callout">
                <div class="callout-title">⚠️ Bei Verhältnisformeln</div>
                Wenn ein Molekülion mehrfach vorkommt, wird es in <strong>Klammern</strong> gesetzt:<br>
                Ca²⁺ + OH⁻ → <strong>Ca(OH)₂</strong> — nicht CaOH₂ und nicht CaO₂H₂!
            </div>

            <div class="mol-ion-display" style="margin-top:16px;">
                <div class="mol-ion-card">
                    <div class="mol-ion-formula">NO₃⁻</div>
                    <div class="mol-ion-name">Nitrat-Ion</div>
                </div>
                <div class="mol-ion-card">
                    <div class="mol-ion-formula">CO₃²⁻</div>
                    <div class="mol-ion-name">Carbonat-Ion</div>
                </div>
                <div class="mol-ion-card">
                    <div class="mol-ion-formula">PO₄³⁻</div>
                    <div class="mol-ion-name">Phosphat-Ion</div>
                </div>
            </div>
        `,
        quiz: {
            question: "Wie lautet die korrekte Verhältnisformel von Aluminiumsulfat (Al³⁺ + SO₄²⁻)?",
            options: [
                { text: "AlSO₄", isCorrect: false, error: "Die Ladungen sind nicht ausgeglichen! Überkreuzregel: Al braucht Index 2 (von 2−), SO₄ braucht Index 3 (von 3+)." },
                { text: "Al₂(SO₄)₃", isCorrect: true },
                { text: "Al₃(SO₄)₂", isCorrect: false, error: "Indizes vertauscht! Die 2 von SO₄²⁻ kommt an Al → Al₂, die 3 von Al³⁺ kommt an SO₄ → (SO₄)₃" }
            ]
        }
    },

    /* ───────── Topic 6: Vom Namen zur Formel ───────── */
    {
        id: "namen_formeln",
        title: "7. Salze: Name ↔ Formel",
        content: `
            <p>Der Name eines Salzes setzt sich zusammen aus:</p>
            <ol>
                <li><strong>Kation</strong> (Metall oder Ammonium) → Name des Metalls</li>
                <li><strong>Anion</strong> (Nichtmetall-Ion oder Molekülion) → Endung <strong>-id</strong> (einatomig) oder spezieller Name (Molekülion)</li>
            </ol>

            <h3>Einatomige Anionen: Endung -id</h3>
            <table class="compare-table">
                <thead>
                    <tr><th>Element</th><th>Ion</th><th>Name</th></tr>
                </thead>
                <tbody>
                    <tr><td>Chlor (Cl)</td><td>Cl⁻</td><td>Chlor<strong>id</strong></td></tr>
                    <tr><td>Sauerstoff (O)</td><td>O²⁻</td><td>Ox<strong>id</strong></td></tr>
                    <tr><td>Schwefel (S)</td><td>S²⁻</td><td>Sulf<strong>id</strong></td></tr>
                    <tr><td>Stickstoff (N)</td><td>N³⁻</td><td>Nitr<strong>id</strong></td></tr>
                    <tr><td>Fluor (F)</td><td>F⁻</td><td>Fluor<strong>id</strong></td></tr>
                    <tr><td>Brom (Br)</td><td>Br⁻</td><td>Brom<strong>id</strong></td></tr>
                </tbody>
            </table>

            <h3>Beispiele</h3>
            <ul>
                <li><strong>Natriumchlorid:</strong> Na⁺ + Cl⁻ → NaCl</li>
                <li><strong>Calciumoxid:</strong> Ca²⁺ + O²⁻ → CaO</li>
                <li><strong>Kaliumsulfat:</strong> K⁺ + SO₄²⁻ → K₂SO₄</li>
                <li><strong>Ammoniumnitrat:</strong> NH₄⁺ + NO₃⁻ → NH₄NO₃</li>
                <li><strong>Calciumhydroxid:</strong> Ca²⁺ + OH⁻ → Ca(OH)₂</li>
            </ul>

            <div class="callout">
                <div class="callout-title">🔑 Von der Formel zum Namen</div>
                Einfach umgekehrt: Zerteile die Formel in Kation und Anion und benenne beide.<br>
                <strong>MgBr₂</strong> → Mg²⁺ + 2 Br⁻ → Magnesium + Bromid → <strong>Magnesiumbromid</strong>
            </div>
        `,
        quiz: {
            question: "Wie heißt die Verbindung Al₂O₃?",
            options: [
                { text: "Aluminiumoxid", isCorrect: true },
                { text: "Aluminiumsauerstoff", isCorrect: false, error: "Bei Salzen wird der Name des Anions verwendet (Oxid), nicht der Elementname (Sauerstoff)." },
                { text: "Dialuminiumtrioxid", isCorrect: false, error: "Diese Art der Benennung (griechische Vorsilben) gilt nur für Molekülverbindungen zwischen Nichtmetallen, nicht für ionische Verbindungen!" }
            ]
        }
    },

    /* ───────── Topic 7: Eigenschaften von Salzen ───────── */
    {
        id: "eigenschaften",
        title: "8. Eigenschaften von Salzen",
        content: `
            <p>Die besonderen Eigenschaften von Salzen lassen sich alle auf ihren <strong>Ionengitter-Aufbau</strong> zurückführen.</p>

            <h3>1. Elektrische Leitfähigkeit</h3>
            <p>Strom fließt nur, wenn <strong>bewegliche Ladungsträger</strong> vorhanden sind.</p>

            <div class="conductivity-demo" id="conductivity-demo">
                <!-- JS fills 3 cells: kristallin, geschmolzen, gelöst -->
            </div>

            <ul>
                <li><strong>Kristallin (fest):</strong> Ionen im Gitter fixiert → NICHT leitfähig ❌</li>
                <li><strong>Geschmolzen (flüssig):</strong> Ionen frei beweglich → leitfähig ✅</li>
                <li><strong>Gelöst in Wasser:</strong> Ionen getrennt und beweglich → leitfähig ✅</li>
            </ul>

            <h3>2. Hohe Schmelztemperatur</h3>
            <p>Die Ionenbindung ist sehr stark → es braucht viel Energie, um das Gitter aufzubrechen.</p>
            <div class="callout">
                <div class="callout-title">📐 Zwei Einflussfaktoren</div>
                <strong>Ladungszahl:</strong> Je höher die Ladung der Ionen, desto stärker die Anziehung → höhere Schmelztemperatur.
                <br>Beispiel: MgO (Mg²⁺/O²⁻, 2852 °C) > NaCl (Na⁺/Cl⁻, 801 °C)
                <br><br>
                <strong>Ionenradius:</strong> Je kleiner die Ionen, desto näher kommen sie sich → stärkere Anziehung → höhere Schmelztemperatur.
                <br>Beispiel: NaF (930 °C) > NaCl (801 °C), weil F⁻ kleiner als Cl⁻ ist.
            </div>

            <h3>3. Sprödigkeit</h3>
            <p>Wenn man einen Salzkristall verformt (z. B. mit einem Hammer schlägt), <strong>verschieben</strong> sich die Ionenschichten.</p>

            <div class="ion-vis-container">
                <div class="brittleness-scene" id="brittleness-scene">
                    <!-- JS fills this -->
                </div>
                <p style="font-size:0.9rem;margin-top:8px;">Gleichnamig geladene Ionen kommen nebeneinander → Abstoßung → Kristall bricht!</p>
            </div>

            <p>Durch die Verschiebung landen <strong>gleichnamig geladene Ionen nebeneinander</strong>. Die elektrostatische <strong>Abstoßung</strong> sprengt den Kristall auseinander → das Salz ist <strong>spröde</strong>.</p>
        `,
        quiz: {
            question: "Welches Salz hat voraussichtlich die höhere Schmelztemperatur: NaCl oder MgO?",
            options: [
                { text: "NaCl, weil es ein sehr bekanntes Salz ist.", isCorrect: false, error: "Bekanntheit hat nichts mit der Schmelztemperatur zu tun! Die Ladung und Größe der Ionen sind entscheidend." },
                { text: "Beide haben etwa die gleiche Schmelztemperatur.", isCorrect: false, error: "MgO hat deutlich höher geladene Ionen (2+/2−) und kleinere Ionen als NaCl (1+/1−)." },
                { text: "MgO, weil die Ionen höher geladen (2+/2−) und kleiner sind als bei NaCl.", isCorrect: true }
            ]
        }
    },

    /* ───────── Topic 8: Minispiel ───────── */
    {
        id: "minigame",
        title: "9. Minispiel: Salz-Meister",
        content: `
            <p>Teste dein Wissen! Du bekommst entweder einen Salznamen oder eine Verhältnisformel. Gib das passende Gegenstück ein!</p>
            <div class="game-container" id="game-root">
                <div class="game-score-row">
                    <span>Aufgabe <span id="game-round-count">1</span>/12</span>
                    <span>Punkte: <span id="game-score">0</span></span>
                </div>
                <div class="game-molecule" id="game-target">...</div>
                <div class="game-input-area">
                    <input type="text" class="game-input" id="game-input" placeholder="Antwort eingeben..." autocomplete="off">
                    <button class="game-submit-btn" id="game-submit">Prüfen</button>
                </div>
                <p style="font-size:0.85rem;color:var(--neutral-800);opacity:0.6;margin-top:8px;">Tipp: Für Indizes einfach Zahlen schreiben, z. B. CaCl2 für CaCl₂</p>
            </div>
        `
    }
];


/* ============================================================
   2. ThemeManager
   ============================================================ */
class ThemeManager {
    constructor() {
        this.toggleBtn = document.getElementById('theme-toggle');
        this.iconPath = document.getElementById('theme-icon-path');
        this.init();
    }

    init() {
        if (!this.toggleBtn || !this.iconPath) return;
        const stored = localStorage.getItem('ion-theme');
        const isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.setTheme(isDark);
        this.toggleBtn.addEventListener('click', () => {
            const currentlyDark = document.documentElement.getAttribute('data-theme') === 'dark';
            this.setTheme(!currentlyDark);
        });
    }

    setTheme(isDark) {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('ion-theme', isDark ? 'dark' : 'light');
        if (isDark) {
            this.iconPath.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z');
        } else {
            this.iconPath.setAttribute('d', 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z');
        }
    }
}


/* ============================================================
   3. ToastService
   ============================================================ */
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


/* ============================================================
   4. MiniGame – Salz-Meister (Name ↔ Formel)
   ============================================================ */
class MiniGame {
    constructor(appRef) {
        this.appRef = appRef;
        this.items = [
            { name: "Natriumchlorid", formula: "NaCl" },
            { name: "Calciumoxid", formula: "CaO" },
            { name: "Magnesiumoxid", formula: "MgO" },
            { name: "Kaliumsulfat", formula: "K2SO4" },
            { name: "Calciumchlorid", formula: "CaCl2" },
            { name: "Aluminiumoxid", formula: "Al2O3" },
            { name: "Natriumhydroxid", formula: "NaOH" },
            { name: "Ammoniumchlorid", formula: "NH4Cl" },
            { name: "Calciumhydroxid", formula: "Ca(OH)2" },
            { name: "Natriumsulfat", formula: "Na2SO4" },
            { name: "Kaliumnitrat", formula: "KNO3" },
            { name: "Magnesiumbromid", formula: "MgBr2" },
        ];
        this.state = { active: false, questions: [], currentIndex: 0, score: 0 };
    }

    init() {
        // Build random questions: half name→formula, half formula→name
        const shuffled = [...this.items].sort(() => Math.random() - 0.5);
        this.state.questions = shuffled.map((item, i) => ({
            ...item,
            mode: i < 6 ? 'name-to-formula' : 'formula-to-name'
        }));
        this.state.currentIndex = 0;
        this.state.score = 0;
        this.state.active = true;
        this.bindEvents();
        this.updateUI();
    }

    bindEvents() {
        const submitBtn = document.getElementById('game-submit');
        const inputField = document.getElementById('game-input');

        if (submitBtn && inputField) {
            const newBtn = submitBtn.cloneNode(true);
            submitBtn.parentNode.replaceChild(newBtn, submitBtn);

            const newInput = inputField.cloneNode(true);
            inputField.parentNode.replaceChild(newInput, inputField);

            newBtn.addEventListener('click', () => this.checkAnswer());
            newInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') this.checkAnswer();
            });
        }
    }

    normalizeFormula(str) {
        return str.trim()
            .replace(/\s+/g, '')
            .replace(/₀/g, '0').replace(/₁/g, '1').replace(/₂/g, '2')
            .replace(/₃/g, '3').replace(/₄/g, '4').replace(/₅/g, '5')
            .replace(/₆/g, '6').replace(/₇/g, '7').replace(/₈/g, '8').replace(/₉/g, '9')
            .replace(/⁺/g, '+').replace(/⁻/g, '-')
            .toLowerCase();
    }

    checkAnswer() {
        if (!this.state.active || this.state.currentIndex >= this.state.questions.length) return;

        const inputEl = document.getElementById('game-input');
        const targetEl = document.getElementById('game-target');
        if (!inputEl || !targetEl) return;

        const q = this.state.questions[this.state.currentIndex];
        const userAnswer = inputEl.value.trim();

        if (!userAnswer) {
            toast.show("Bitte eine Antwort eingeben!");
            return;
        }

        let correct = false;
        let correctAnswer = '';

        if (q.mode === 'name-to-formula') {
            correctAnswer = q.formula;
            correct = this.normalizeFormula(userAnswer) === this.normalizeFormula(q.formula);
        } else {
            correctAnswer = q.name;
            correct = userAnswer.toLowerCase().trim() === q.name.toLowerCase().trim();
        }

        if (correct) {
            this.state.score += 10;
            this.appRef.addScore(10);
            toast.show("Richtig! +10 🎉");
            targetEl.style.color = "var(--success)";
            targetEl.style.transform = "scale(1.1)";
        } else {
            this.appRef.resetStreak();
            toast.show(`Falsch! Richtig wäre: ${correctAnswer}`);
            targetEl.style.color = "var(--error)";
            targetEl.style.transform = "translateX(15px)";
        }

        this.state.currentIndex++;

        setTimeout(() => {
            if (targetEl) {
                targetEl.style.color = "var(--primary)";
                targetEl.style.transform = "none";
            }
            this.updateUI();
        }, 800);
    }

    updateUI() {
        const targetEl = document.getElementById('game-target');
        const inputEl = document.getElementById('game-input');
        if (!targetEl) return;

        if (this.state.currentIndex >= this.state.questions.length) {
            targetEl.innerHTML = `🏆 Fertig!<br><span style="font-size:1rem;">${this.state.score} / ${this.state.questions.length * 10} Punkte</span>`;
            targetEl.style.fontSize = "1.8rem";
            this.state.active = false;
            if (inputEl) inputEl.style.display = 'none';
            const btn = document.getElementById('game-submit');
            if (btn) btn.style.display = 'none';
            toast.show("Minispiel beendet! 🏆");
            this.appRef.markQuizCompleted(TOPICS_DATA.length - 1);
        } else {
            const q = this.state.questions[this.state.currentIndex];
            if (q.mode === 'name-to-formula') {
                targetEl.innerHTML = `📝 Gib die Formel ein:<br><strong style="color:var(--accent);">${q.name}</strong>`;
            } else {
                targetEl.innerHTML = `📝 Wie heißt das Salz?<br><strong style="color:var(--accent);">${this.formatFormula(q.formula)}</strong>`;
            }
            document.getElementById('game-round-count').innerText = (this.state.currentIndex + 1);
            document.getElementById('game-score').innerText = this.state.score;
            if (inputEl) {
                inputEl.value = '';
                inputEl.focus();
            }
        }
    }

    formatFormula(f) {
        return f.replace(/(\d)/g, '<sub>$1</sub>');
    }
}


/* ============================================================
   5. AppController
   ============================================================ */
class AppController {
    constructor() {
        this.topics = TOPICS_DATA;
        this.state = {
            currentIndex: 0,
            score: 0,
            streak: 0,
            completed: new Set()
        };
        this.miniGame = new MiniGame(this);
    }

    init() {
        this.renderSidebar();
        this.renderTopic(0);
        this.updateHeaderProgress();
    }

    renderSidebar() {
        const navMenu = document.getElementById('topic-nav');
        if (!navMenu) return;

        navMenu.innerHTML = '';
        this.topics.forEach((topic, index) => {
            const item = document.createElement('div');
            item.className = 'nav-item';
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
        document.querySelectorAll('.nav-item').forEach((item, i) => {
            item.classList.toggle('active', i === activeIndex);
        });
    }

    updateHeaderProgress() {
        const pct = (this.state.completed.size / this.topics.length) * 100;
        document.getElementById('app-progress').style.width = `${pct}%`;
        document.getElementById('score-display').innerText = this.state.score;
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
        const nextBtn = document.getElementById('btn-next');
        if (nextBtn) nextBtn.style.display = 'inline-flex';
    }

    renderTopic(index) {
        this.state.currentIndex = index;
        const topic = this.topics[index];
        this.updateSidebarSelection(index);

        const container = document.getElementById('content-area');
        if (!container) return;

        const isCompleted = this.state.completed.has(index);

        // Build Quiz HTML
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

        // Bind Quiz Logic
        if (topic.quiz) {
            topic.quiz.options.forEach((opt, i) => {
                document.getElementById(`opt-btn-${i}`).addEventListener('click', () => {
                    this.handleQuizAnswer(i, topic.quiz);
                });
            });
        }

        // Next Button
        document.getElementById('btn-next').addEventListener('click', () => {
            if (this.state.currentIndex < this.topics.length - 1) {
                this.renderTopic(this.state.currentIndex + 1);
            } else {
                this.renderCompletionScreen();
            }
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Build dynamic visualizations
        this.buildDynamicVisuals(topic.id);

        // Init Minigame
        if (topic.id === 'minigame') {
            setTimeout(() => this.miniGame.init(), 100);
        }
    }

    buildDynamicVisuals(topicId) {
        // NaCl Lattice
        if (topicId === 'ionengitter') {
            this.buildLattice('lattice-nacl', 'Na⁺', 'Cl⁻');
        }
        // Gittermodell
        if (topicId === 'modelle_gitter') {
            this.buildLattice('lattice-model-view', 'Na⁺', 'Cl⁻');
        }
        // Conductivity
        if (topicId === 'eigenschaften') {
            this.buildConductivityDemo();
            this.buildBrittlenessScene();
        }
    }

    buildLattice(containerId, catLabel, anLabel) {
        const el = document.getElementById(containerId);
        if (!el) return;
        el.innerHTML = '';
        for (let i = 0; i < 15; i++) {
            const ion = document.createElement('div');
            const isCat = i % 2 === 0;
            ion.className = `lattice-ion ${isCat ? 'cat' : 'an'}`;
            ion.textContent = isCat ? catLabel : anLabel;
            ion.style.animationDelay = `${i * 0.05}s`;
            el.appendChild(ion);
        }
    }

    buildConductivityDemo() {
        const container = document.getElementById('conductivity-demo');
        if (!container) return;

        container.innerHTML = `
            <div class="cond-cell">
                <div class="cell-visual crystal-visual"></div>
                <div class="cell-label">Kristallin (fest)</div>
                <div class="cell-result no">Nicht leitfähig</div>
            </div>
            <div class="cond-cell">
                <div class="cell-visual melt-visual">
                    <div class="melt-ion mi-cat" style="top:12px;left:15px;"></div>
                    <div class="melt-ion mi-an" style="top:30px;left:40px;"></div>
                    <div class="melt-ion mi-cat" style="top:8px;left:55px;"></div>
                    <div class="melt-ion mi-an" style="top:35px;left:20px;"></div>
                    <div class="melt-ion mi-cat" style="top:25px;left:60px;"></div>
                </div>
                <div class="cell-label">Geschmolzen</div>
                <div class="cell-result yes">Leitfähig ✓</div>
            </div>
            <div class="cond-cell">
                <div class="cell-visual dissolved-visual">
                    <div class="dissolved-ion di-cat" style="top:10px;left:12px;"></div>
                    <div class="dissolved-ion di-an" style="top:28px;left:35px;"></div>
                    <div class="dissolved-ion di-cat" style="top:14px;left:58px;"></div>
                    <div class="dissolved-ion di-an" style="top:38px;left:18px;"></div>
                    <div class="dissolved-ion di-cat" style="top:32px;left:55px;"></div>
                    <div class="dissolved-ion di-an" style="top:6px;left:40px;"></div>
                </div>
                <div class="cell-label">Gelöst in Wasser</div>
                <div class="cell-result yes">Leitfähig ✓</div>
            </div>
        `;
    }

    buildBrittlenessScene() {
        const container = document.getElementById('brittleness-scene');
        if (!container) return;

        const makeHalf = (shifted) => {
            const div = document.createElement('div');
            div.className = `lattice-half${shifted ? ' shifted' : ''}`;
            const pattern = shifted
                ? ['bc', 'ba', 'bc', 'ba', 'bc', 'ba', 'bc', 'ba', 'bc']
                : ['ba', 'bc', 'ba', 'bc', 'ba', 'bc', 'ba', 'bc', 'ba'];
            pattern.forEach(cls => {
                const ion = document.createElement('div');
                ion.className = `britt-ion ${cls}`;
                ion.textContent = cls === 'bc' ? '+' : '−';
                div.appendChild(ion);
            });
            return div;
        };

        container.innerHTML = '';
        container.appendChild(makeHalf(false));

        const crack = document.createElement('div');
        crack.className = 'crack-symbol';
        crack.textContent = '⚡';
        container.appendChild(crack);

        container.appendChild(makeHalf(true));
    }

    handleQuizAnswer(optionIndex, quiz) {
        const selected = quiz.options[optionIndex];
        const btns = document.querySelectorAll('#quiz-options .option-btn');

        btns.forEach(b => { b.disabled = true; b.style.pointerEvents = 'none'; });

        if (selected.isCorrect) {
            btns[optionIndex].classList.add('correct', 'selected');
            toast.show('Richtig! 🎉');

            if (!this.state.completed.has(this.state.currentIndex)) {
                this.state.score += 10;
                this.state.streak += 1;
                this.markQuizCompleted(this.state.currentIndex);
            }
        } else {
            btns[optionIndex].classList.add('incorrect', 'selected');
            const correctIndex = quiz.options.findIndex(o => o.isCorrect);
            btns[correctIndex].classList.add('correct');
            this.resetStreak();

            const feedbackHtml = `
                <div class="callout error" style="margin-top: 16px;">
                    <div class="callout-title">⚠️ Fehlerteufel</div>
                    ${selected.error || 'Diese Antwort ist leider nicht korrekt.'}
                </div>
            `;
            document.getElementById('quiz-feedback').innerHTML = feedbackHtml;

            toast.show('Leider falsch!');
            this.markQuizCompleted(this.state.currentIndex);
        }
    }

    renderCompletionScreen() {
        this.state.currentIndex = -1;
        this.updateSidebarSelection(-1);

        const container = document.getElementById('content-area');
        const maxScore = this.topics.length * 10 + 120; // quizzes + game
        container.innerHTML = `
            <div class="content-card" style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 16px;">🎓</div>
                <h2 class="card-title" style="justify-content: center;">Gratulation!</h2>
                <p style="font-size: 1.2rem;">Du hast alle Grundlagen zu <strong>Ionen & Salzen</strong> erarbeitet!</p>

                <div style="margin: 32px 0; background: var(--neutral-100); padding: 24px; border-radius: 12px; transition: background 0.3s;">
                    <div style="font-size: 2rem; color: var(--primary); font-weight: bold;">${this.state.score} Punkte</div>
                    <div>Dein Ionengitter-Erfolg 🚀</div>
                </div>

                <button class="btn-primary" id="btn-restart">Nochmal Üben</button>
            </div>
        `;

        document.getElementById('btn-restart').addEventListener('click', () => this.resetApp());
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    resetApp() {
        this.state.score = 0;
        this.state.streak = 0;
        this.state.completed.clear();

        this.topics.forEach((t, i) => {
            const statEl = document.getElementById(`status-${i}`);
            if (statEl) statEl.innerText = '';
        });

        this.updateHeaderProgress();
        this.renderTopic(0);
    }
}


/* ============================================================
   Bootstrap
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    const app = new AppController();
    app.init();
});
