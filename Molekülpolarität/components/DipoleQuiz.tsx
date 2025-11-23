import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { QUIZ_MOLECULES } from '../constants';
import { MoleculeRenderer } from './MoleculeRenderer';
import { AtomSymbol } from '../types';

export const DipoleQuiz: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(() => {
    return parseInt(localStorage.getItem('polarityQuizScore') || '0');
  });
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Randomize order on mount? keeping it simple linear for now based on prompt, but could shuffle.
  const molecule = QUIZ_MOLECULES[currentIndex];

  const handleAnswer = (userSaysDipole: boolean) => {
    if (hasAnswered) return;

    const correct = userSaysDipole === molecule.isDipole;
    setHasAnswered(true);
    setIsCorrect(correct);

    if (correct) {
      const newScore = score + 10;
      setScore(newScore);
      localStorage.setItem('polarityQuizScore', newScore.toString());
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ea580c', '#f59e0b', '#3b82f6']
      });
    }
  };

  const nextQuestion = () => {
    setCurrentIndex((prev) => (prev + 1) % QUIZ_MOLECULES.length);
    setHasAnswered(false);
    setIsCorrect(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100">
      <div className="bg-orange-600 p-4 text-white flex justify-between items-center">
        <h2 className="font-bold text-xl">🎓 Der Dipol-Check</h2>
        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-mono">Score: {score}</span>
      </div>

      <div className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-1">{molecule.name}</h3>
          <p className="text-xl text-slate-500 font-serif" dangerouslySetInnerHTML={{ __html: molecule.formula }}></p>
        </div>

        <div className="flex justify-center mb-8">
             <MoleculeRenderer 
                center={molecule.centerAtom || AtomSymbol.H}
                partners={molecule.partners}
                geometry={molecule.geometry}
                // Hide cues initially
                showBondVectors={hasAnswered} 
                showNetDipole={false} // Don't show the answer directly
             />
        </div>

        {!hasAnswered ? (
            <div className="grid grid-cols-2 gap-4">
                <button 
                    onClick={() => handleAnswer(true)}
                    className="bg-red-100 hover:bg-red-200 text-red-700 font-bold py-4 px-6 rounded-xl border border-red-200 transition flex flex-col items-center"
                >
                    <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    DIPOL
                </button>
                <button 
                    onClick={() => handleAnswer(false)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 px-6 rounded-xl border border-slate-200 transition flex flex-col items-center"
                >
                    <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                         <circle cx="12" cy="12" r="10" />
                         <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                    </svg>
                    KEIN DIPOL
                </button>
            </div>
        ) : (
            <div className={`text-center p-6 rounded-xl border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <h4 className={`text-xl font-bold mb-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                    {isCorrect ? '🎉 Richtig!' : '❌ Leider falsch.'}
                </h4>
                <p className="text-slate-700 mb-4">{molecule.explanation}</p>
                <button 
                    onClick={nextQuestion}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-8 rounded shadow transition"
                >
                    Nächstes Molekül &rarr;
                </button>
            </div>
        )}
      </div>
    </div>
  );
};