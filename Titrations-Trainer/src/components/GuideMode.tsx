import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Beaker } from './Beaker';

export function GuideMode() {
    const [step, setStep] = useState(0);
    const [nValue, setNValue] = useState(4); // 1 to 20
    const [vValue, setVValue] = useState(1.0); // 0.1 to 2.0 L

    const calcC = (nValue / vValue).toFixed(1);

    const steps = [
        {
            title: "Was ist ein Titrations-Trainer?",
            content: (
                <div>
                    <p className="mb-4">
                        Die Stoffmengenkonzentration einer Lösung kann man ermitteln, indem man die Stoffmenge der Teilchen in der verbrauchten Maßlösung zu der Stoffmenge der Teilchen in der Lösung unbekannter Konzentration in Beziehung setzt. Dies können wir anhand eines Beispiels Schritt-für-Schritt erschließen.
                    </p>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/30 border-l-4 border-chem-500 rounded-r-lg italic">
                        Bei der Titration von 20 mL Natriumhydroxidlösung unbekannter Konzentration mit salzsaurer Lösung der Konzentration 1,0 mol/L wurden 10 mL salzsaure Lösung bis zum dauerhaften Farbumschlag des Indikators verbraucht. Berechne die Konzentration der Natriumhydroxidlösung.
                    </div>
                </div>
            )
        },
        {
            title: "1. Gegebene und gesuchte Werte",
            content: (
                <div>
                    <h4 className="font-bold mb-2">Notiere alle gegebenen und gesuchten Werte.</h4>
                    <div className="flex flex-wrap gap-8 bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <div>
                            <span className="font-semibold text-slate-500">Gegeben:</span><br/>
                            <span className="f-v">V₁</span> = 20,0 mL<br/>
                            <span className="f-c">c₂</span> = 1,0 mol/L<br/>
                            <span className="f-v">V₂</span> = 10 mL
                        </div>
                        <div>
                            <span className="font-semibold text-slate-500">Gesucht:</span><br/>
                            <span className="f-c">c₁</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "2. Reaktionsgleichung aufstellen",
            content: (
                <div>
                    <h4 className="font-bold mb-2">Stelle die vereinfachte Reaktionsgleichung für die Säure-Base-Reaktion auf.</h4>
                    <div className="font-mono bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800 text-center rounded-xl text-lg">
                        NaOH (aq) + HCl (aq) ⟶ H₂O (l) + NaCl (aq)
                    </div>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                        Dies zeigt uns, in welchem Verhältnis die Stoffe miteinander reagieren.
                    </p>
                </div>
            )
        },
        {
            title: "3. Stoffmengenverhältnis ablesen",
            content: (
                <div>
                    <h4 className="font-bold mb-2">Lies das Stoffmengenverhältnis <span className="f-n">n₁</span> zu <span className="f-n">n₂</span> aus der Reaktionsgleichung ab.</h4>
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-center text-xl">
                        <span><span className="f-n">n₁</span> / <span className="f-n">n₂</span> = 1 / 1</span>
                    </div>
                </div>
            )
        },
        {
            title: "4. Formel umstellen",
            content: (
                <div>
                    <h4 className="font-bold mb-2">Die Stoffmenge ist definiert als <span className="f-n">n</span> = <span className="f-c">c</span> · <span className="f-v">V</span>.</h4>
                    <p className="text-sm mb-4">Das Stoffmengenverhältnis, in dem die beiden Stoffe reagieren, ergibt sich somit zu:</p>
                    <div className="flex justify-center mb-4">
                        <span className="text-lg bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800">
                            <span className="f-n">n₁</span> / <span className="f-n">n₂</span> = (<span className="f-c">c₁</span> · <span className="f-v">V₁</span>) / (<span className="f-c">c₂</span> · <span className="f-v">V₂</span>)
                        </span>
                    </div>
                    <p className="text-sm mb-4">Diese Gleichung löst man nach <span className="f-c">c₁</span> auf:</p>
                    <div className="flex justify-center">
                        <span className="text-xl font-bold bg-orange-50 dark:bg-orange-950/40 p-4 rounded-xl border border-orange-200 dark:border-orange-800/50 shadow-sm">
                            <span className="f-c">c₁</span> = (<span className="f-n">n₁</span> · <span className="f-c">c₂</span> · <span className="f-v">V₂</span>) / (<span className="f-n">n₂</span> · <span className="f-v">V₁</span>)
                        </span>
                    </div>
                </div>
            )
        },
        {
            title: "5. Werte einsetzen",
            content: (
                <div>
                    <h4 className="font-bold mb-4">Setze die bekannten Werte ein und berechne die gesuchte Konzentration.</h4>
                    <div className="font-bold bg-chem-50 dark:bg-chem-900/20 p-6 rounded-xl border border-chem-200 dark:border-chem-800/50 text-center text-xl shadow-md">
                        <span className="f-c">c₁</span> = (1 · 1,0 mol/L · 10 mL) / (1 · 20 mL) = <span className="f-c text-2xl">0,5 mol/L</span>
                    </div>
                </div>
            )
        },
        {
            title: "6. Alternativer Lösungsweg",
            content: (
                <div>
                    <h4 className="font-bold mb-4">Schrittweise Berechnung:</h4>
                    <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">Statt die Gleichung sofort aufzulösen, kannst du auch in zwei isolierten Schritten rechnen:</p>
                    
                    <div className="space-y-4">
                        <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                            <h4 className="font-bold mb-2 text-sm">A. Berechne die Stoffmenge der Reaktionspartner (<span className="f-n">n</span>)</h4>
                            <p className="text-xs mb-2">Berechne zuerst die Stoffmenge der zugegebenen Maßlösung (<span className="f-n">n₂</span>). Aus dem Stoffmengenverhältnis (1:1) weißt du: <span className="f-n">n₁</span> = <span className="f-n">n₂</span>.</p>
                            <div className="font-bold mb-1">
                                <span className="f-n">n₁</span> = <span className="f-n">n₂</span> = <span className="f-c">c₂</span> · <span className="f-v">V₂</span>
                            </div>
                            <div className="pl-4 border-l-2 border-slate-300 dark:border-slate-600 font-mono text-sm">
                                <span className="f-n">n₁</span> = 1,0 mol/L · 10 mL = <span className="f-n">10 mmol</span>
                            </div>
                        </div>
                        
                        <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl bg-chem-50 dark:bg-chem-900/10">
                            <h4 className="font-bold mb-2 text-sm">B. Berechne die gesuchte Konzentration (<span className="f-c">c₁</span>)</h4>
                            <p className="text-xs mb-2">Teile die erhaltene Stoffmenge nun durch das Volumen der Probelösung (<span className="f-v">V₁</span>):</p>
                            <div className="font-bold mb-1">
                                <span className="f-c">c₁</span> = <span className="f-n">n₁</span> / <span className="f-v">V₁</span>
                            </div>
                            <div className="pl-4 border-l-2 border-chem-300 dark:border-chem-700 font-bold font-mono text-sm">
                                <span className="f-c">c₁</span> = 10 mmol / 20 mL = <span className="f-c text-lg">0,5 mol/L</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-12 xl:col-span-8 space-y-6">
                
                {/* Visual Tracker */}
                <div className="flex gap-1 mb-6 max-w-full overflow-x-auto pb-2">
                    {steps.map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-2 flex-grow rounded-full transition-colors ${i <= step ? 'bg-orange-500' : 'bg-slate-200 dark:bg-slate-700'}`}
                        />
                    ))}
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 min-h-[350px] relative flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-3">
                                {step > 0 && <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 text-sm">{step}</span>}
                                {steps[step].title}
                            </h2>
                            {steps[step].content}
                        </motion.div>
                    </AnimatePresence>

                    <div className="step-buttons mt-8 pt-4 border-t border-slate-100 dark:border-slate-700">
                        <button
                            onClick={() => setStep(s => Math.max(0, s - 1))}
                            disabled={step === 0}
                            className="btn-nav secondary"
                        >
                            ← Zurück
                        </button>
                        
                        {step < steps.length - 1 ? (
                            <button
                                onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))}
                                className="btn-nav primary"
                            >
                                Weiter →
                            </button>
                        ) : (
                            <button
                                onClick={() => setStep(0)}
                                className="btn-nav secondary"
                            >
                                Neu starten
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="hidden lg:block lg:col-span-12 xl:col-span-4 h-full">
               <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 sticky top-24">
                   <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Simulator</h3>
                   <div className="space-y-6">
                        <div>
                            <label className="block mb-2 font-semibold text-sm">
                                <span className="f-n">Stoffmenge n</span>: {nValue} mol
                            </label>
                            <input type="range" min="1" max="20" value={nValue} onChange={e => setNValue(parseInt(e.target.value))} className="w-full accent-blue-600" />
                        </div>
                        
                        <div>
                            <label className="block mb-2 font-semibold text-sm">
                                <span className="f-v">Volumen V</span>: {vValue.toFixed(1)} L
                            </label>
                            <input type="range" min="0.2" max="2.0" step="0.2" value={vValue} onChange={e => setVValue(parseFloat(e.target.value))} className="w-full accent-emerald-500" />
                        </div>
                        
                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl text-center">
                            <div className="font-bold text-sm text-slate-500 mb-1">Resultierende Konzentration</div>
                            <div className="text-2xl f-c font-extrabold">{calcC} mol/L</div>
                        </div>

                        <Beaker nValue={nValue} vValue={vValue} />
                    </div>
               </div>
            </div>
        </div>
    );
}
