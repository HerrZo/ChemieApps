import React, { useState } from 'react';

// Exercise Tasks directly based on USER input
const TASKS = [
    {
        id: 1,
        acid: "salzsaurer Lösung (HCl (aq))", base: "Natriumhydroxidlösung", formulaBase: "NaOH",
        textTemplate: "Bei einer Titration von {V1} mL {acid} unbekannter Konzentration werden {V2} mL {base} der Stoffmengenkonzentration c({formulaBase}) = {c2} mol/L verbraucht. Berechne die Stoffmengenkonzentration der {acid_short}.",
        acid_short: "salzsauren Lösung", fBase_short: "NaOH",
        base_vAcid: 25, base_vBase: 10, base_cBase: 0.1
    },
    {
        id: 2,
        acid: "Salpetersäure-Lösung (HNO₃(aq))", base: "Kalilauge-Lösung", formulaBase: "KOH",
        textTemplate: "Bei einer Titration von {V1} mL {acid} unbekannter Konzentration werden {V2} mL {base} ({formulaBase}) mit einer Stoffmengenkonzentration von c({formulaBase}) = {c2} mol/L bis zum Umschlagpunkt des Indikators verbraucht. Berechne die Stoffmengenkonzentration der {acid_short}.",
        acid_short: "Salpetersäure-Lösung", fBase_short: "KOH",
        base_vAcid: 20, base_vBase: 15, base_cBase: 0.2
    },
    {
         id: 3,
         acid: "Bromwasserstoffsäure-Lösung (HBr(aq))", base: "Natronlaugelösung", formulaBase: "NaOH(aq)",
         textTemplate: "Zur vollständigen Neutralisation von {V1} mL einer {acid} unbekannter Konzentration werden in der Maßanalyse {V2} mL {base} ({formulaBase}) der Stoffmengenkonzentration c({fBase_short}) = {c2} mol/L titriert. Bestimme die Stoffmengenkonzentration der {acid_short}.",
         acid_short: "Bromwasserstoffsäure-Lösung", fBase_short: "NaOH",
         base_vAcid: 40, base_vBase: 25, base_cBase: 0.15
    },
    {
         id: 4,
         acid: "Iodwasserstoffsäure-Lösung (HI(aq))", base: "Lithiumhydroxid-Lösung", formulaBase: "LiOH(aq)",
         textTemplate: "Bei der Maßanalyse von {V1} mL {acid} unbekannter Konzentration wird als Maßlösung {base} ({formulaBase}) der Stoffmengenkonzentration c({fBase_short}) = {c2} mol/L verwendet. Bis zum Erreichen des Äquivalenzpunktes werden exakt {V2} mL der basischen Maßlösung verbraucht. Berechne die Stoffmengenkonzentration der {acid_short}.",
         acid_short: "Iodwasserstoffsäure-Lösung", fBase_short: "LiOH",
         base_vAcid: 50, base_vBase: 35, base_cBase: 0.12
    }
];

function generateExercise(taskId: number) {
    const template = TASKS.find(t => t.id === taskId);
    if (!template) return null;
    
    let V1 = template.base_vAcid;
    let V2 = template.base_vBase;
    let c2 = template.base_cBase;
    
    let c1 = (c2 * V2) / V1;
    
    let text = template.textTemplate
        .replace('{V1}', `<span class="f-v">${V1}</span>`)
        .replace('{V2}', `<span class="f-v">${V2}</span>`)
        .replace('{c2}', `<span class="f-c">${c2.toString().replace('.',',')}</span>`)
        .replace('{acid}', template.acid)
        .replace('{base}', template.base)
        .replace(/{formulaBase}/g, template.formulaBase)
        .replace('{acid_short}', template.acid_short)
        .replace('{fBase_short}', template.fBase_short);
        
    return {
        id: template.id,
        text,
        V1, V2, c2,
        expectedAnswer: c1,
        unit: "mol/L",
        varTarget: "c"
    };
}

export function PracticeMode() {
    const [currentTask, setCurrentTask] = useState(1);
    const [exercise, setExercise] = useState(() => generateExercise(1));
    const [userAnswer, setUserAnswer] = useState("");
    const [feedback, setFeedback] = useState<'correct'|'incorrect'|null>(null);
    const [hintsShown, setHintsShown] = useState(0);

    const loadTask = (id: number) => {
        setCurrentTask(id);
        const ex = generateExercise(id);
        if(ex) setExercise(ex);
        setUserAnswer("");
        setFeedback(null);
        setHintsShown(0);
    };

    const nextEx = () => {
        let nextId = currentTask < TASKS.length ? currentTask + 1 : 1;
        loadTask(nextId);
    };

    const checkAnswer = () => {
        if(!exercise) return;
        const expected = exercise.expectedAnswer;
        const userVal = parseFloat(userAnswer.replace(',','.'));
        
        if (isNaN(userVal)) {
            setFeedback('incorrect'); return;
        }

        if (Math.abs(userVal - expected) <= 0.005) {
            setFeedback('correct');
        } else {
            setFeedback('incorrect');
        }
    };
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    };

    if(!exercise) return <div>Ladefehler</div>;

    return (
        <div className="animate-[fadeInUp_0.5s_ease-out]">
            <div className="flex flex-wrap gap-2 mb-6 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl max-w-fit mx-auto border border-slate-200 dark:border-slate-700">
                {TASKS.map(t => (
                    <button 
                        key={t.id}
                        onClick={() => loadTask(t.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${currentTask === t.id ? 'bg-white dark:bg-slate-600 shadow-sm text-slate-800 dark:text-white' : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                    >
                        Aufgabe {currentTask === t.id && '▶'} {t.id}
                    </button>
                ))}
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 mb-8 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100 dark:bg-orange-900/20 opacity-40 rounded-full pointer-events-none"></div>

                <div className="font-bold text-slate-400 mb-2 uppercase text-xs tracking-wider">Aufgabe {exercise.id}</div>
                <div className="text-lg sm:text-lg leading-relaxed mb-8" dangerouslySetInnerHTML={{__html: exercise.text}}></div>

                <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl relative border border-slate-100 dark:border-slate-700/50">
                    <div className="flex items-center gap-3 font-bold text-lg">
                        <span className="f-c text-xl">c</span> = 
                    </div>
                    
                    <input 
                        type="text"
                        inputMode="decimal"
                        value={userAnswer}
                        onChange={(e) => {
                            setUserAnswer(e.target.value);
                            if(feedback) setFeedback(null);
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder="?"
                        className={`form-input focus:ring-4 focus:ring-orange-500/20 ${feedback === 'correct' ? 'correct' : feedback === 'incorrect' ? 'incorrect' : ''}`}
                    />
                    
                    <div className="font-bold text-slate-600 dark:text-slate-300">
                        {exercise.unit}
                    </div>
                    
                    <button 
                        onClick={checkAnswer}
                        className="mt-4 sm:mt-0 sm:ml-auto px-6 py-3 bg-chem-600 hover:bg-chem-700 text-white font-bold rounded-xl shadow-md transition-all active:scale-95"
                    >
                        Prüfen
                    </button>
                </div>

                {/* Feedback & Actions */}
                <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex-1 min-h-[48px]">
                        {feedback === 'correct' && (
                            <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 rounded-lg w-fit border border-emerald-200 dark:border-emerald-800 animate-[fadeInUp_0.3s]">
                                ✅ Richtig! Gut berechnet!
                            </div>
                        )}
                        {feedback === 'incorrect' && (
                            <div className="flex items-center text-rose-600 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-900/30 px-4 py-2 rounded-lg w-fit border border-rose-200 dark:border-rose-800 animate-[fadeInUp_0.3s]">
                                ❌ Leider falsch. Probiere es nochmal!
                            </div>
                        )}
                    </div>
                    
                    <div className="flex gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                        <button 
                            onClick={() => setHintsShown(h => h + 1)}
                            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-bold rounded-lg transition-colors text-sm flex-1 sm:flex-none"
                        >
                            💡 Tipp
                        </button>
                        <button 
                            onClick={nextEx}
                            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold rounded-lg transition-colors text-sm flex-1 sm:flex-none"
                        >
                            Nächste Aufgabe ➔
                        </button>
                    </div>
                </div>
                
                {hintsShown > 0 && (
                    <div className="mt-6 p-5 text-sm bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-xl animate-[fadeInUp_0.3s]">
                        <span className="font-bold flex items-center mb-2">Tipp 1: Formel aufstellen</span>
                        <p className="mb-2">Da alle hier auftretenden Säuren und Basen im Stoffmengenverhältnis 1:1 reagieren, gilt: <br/>n₁ = n₂ &nbsp;&nbsp;&nbsp; bzw. &nbsp;&nbsp;&nbsp; c₁ · V₁ = c₂ · V₂</p>
                        
                        {hintsShown > 1 && (
                            <div className="pt-3 mt-3 border-t border-amber-200 dark:border-amber-800">
                                <span className="font-bold flex items-center mb-2">Tipp 2: Umstellen und Einsetzen</span>
                                <p>Du suchst <span className="f-c">c₁</span> (die Konzentration der Säure). Formel umgestellt:<br/>
                                <span className="f-c font-bold">c₁</span> = (<span className="f-c">c₂</span> · <span className="f-v">V₂</span>) / <span className="f-v">V₁</span></p>
                                <p className="mt-2 font-mono bg-white dark:bg-slate-800 p-2 rounded inline-block">
                                    c₁ = ({exercise.c2.toString().replace('.',',')} · {exercise.V2}) / {exercise.V1} = ...
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
