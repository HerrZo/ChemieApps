// QuizInterface.tsx - Advanced Quiz with Progress Ring & Smart Feedback

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './QuizInterface.css';

interface Question {
  id: string;
  question: string;
  image?: string;
  options: Array<{ label: string; explanation: string }>;
  correctIndex: number;
  category: string;
}

interface QuizInterfaceProps {
  questions: Question[];
  title: string;
  onComplete: (score: number) => void;
}

const QUIZ_DATA: Question[] = [
  {
    id: 'zmww-1',
    question: 'Welche Wechselwirkung dominiert in Methan (CH₄)?',
    options: [
      { label: 'London-Kräfte', explanation: 'Richtig! Methan ist unpolar, deshalb wirken nur schwache London-Dispersions-Kräfte.' },
      { label: 'Dipol-Dipol', explanation: 'Falsch. Methan ist symmetrisch und unpolar, daher keine permanenten Dipole.' },
      { label: 'Wasserstoffbrücken', explanation: 'Falsch. H-Brücken entstehen nur bei H-N, H-O, H-F Bindungen.' }
    ],
    correctIndex: 0,
    category: 'ZMWW'
  },
  {
    id: 'zmww-2',
    question: 'Warum hat Wasser einen so hohen Siedepunkt?',
    options: [
      { label: 'Große molare Masse', explanation: 'Teilweise richtig, aber nicht die Hauptursache bei so einem kleinen Molekül.' },
      { label: 'Wasserstoffbrückenbindungen', explanation: 'Korrekt! H₂O bildet starke H-Brücken zwischen den Molekülen. Das ist der Hauptgrund für den hohen Siedepunkt.' },
      { label: 'Ionische Bindungen', explanation: 'Falsch. Wasser ist ein molekulares Compound, keine ionische Verbindung.' }
    ],
    correctIndex: 1,
    category: 'ZMWW'
  }
];

export function QuizInterface({ questions = QUIZ_DATA, title = 'Quiz', onComplete }: QuizInterfaceProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);

  const question = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const isCorrect = answered === question.correctIndex;

  const handleAnswer = (index: number) => {
    if (answered !== null) return;

    setIsRevealing(true);
    setAnswered(index);

    if (index === question.correctIndex) {
      setScore(s => s + 1);
      setTimeout(() => setShowExplanation(true), 600);
    } else {
      setTimeout(() => setShowExplanation(true), 400);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setAnswered(null);
      setShowExplanation(false);
      setIsRevealing(false);
    } else {
      onComplete(score);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(c => c - 1);
      setAnswered(null);
      setShowExplanation(false);
    }
  };

  return (
    <div className="quiz-interface">
      {/* Top Bar with Progress */}
      <div className="quiz-topbar">
        <div className="quiz-back">
          <button onClick={handlePrev} disabled={currentIndex === 0} className="btn-nav">
            ← Zurück
          </button>
        </div>

        {/* Progress Ring */}
        <div className="progress-ring-container">
          <svg className="progress-ring-svg" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" className="ring-bg" />
            <circle
              cx="60"
              cy="60"
              r="54"
              className="ring-progress"
              style={{
                strokeDasharray: `${(2 * Math.PI * 54 * progress) / 100} ${2 * Math.PI * 54}`,
              }}
            />
          </svg>
          <div className="ring-content">
            <span className="ring-number">{currentIndex + 1}</span>
            <span className="ring-total">von {questions.length}</span>
          </div>
        </div>

        {/* Score */}
        <div className="quiz-score">
          <span className="score-label">Punkte</span>
          <span className="score-value">{score}/{questions.length}</span>
        </div>
      </div>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
          className="quiz-content"
        >
          {/* Question Card */}
          <div className="question-card">
            <div className="question-header">
              <span className="category-badge">{question.category}</span>
              <span className="difficulty">●●○</span>
            </div>

            <h2 className="question-text">{question.question}</h2>

            {question.image && (
              <motion.img
                src={question.image}
                alt="Question visual"
                className="question-image"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              />
            )}
          </div>

          {/* Answer Options */}
          <div className="answers-grid">
            {question.options.map((option, idx) => {
              const isChosen = answered === idx;
              const isCorrectOption = idx === question.correctIndex;
              let state = 'default';

              if (answered !== null) {
                if (isCorrectOption) state = 'correct';
                else if (isChosen) state = 'wrong';
                else state = 'disabled';
              }

              return (
                <motion.button
                  key={idx}
                  className={`answer-button ${state}`}
                  onClick={() => handleAnswer(idx)}
                  disabled={answered !== null}
                  whileHover={answered === null ? { scale: 1.02 } : {}}
                  whileTap={answered === null ? { scale: 0.98 } : {}}
                  animate={
                    isRevealing && isChosen && !isCorrect
                      ? { x: [-8, 8, -8, 8, 0] }
                      : {}
                  }
                  transition={{ duration: 0.3 }}
                >
                  <span className="answer-indicator">
                    {state === 'correct' && '✓'}
                    {state === 'wrong' && '✗'}
                    {state === 'default' && `${String.fromCharCode(65 + idx)}`}
                  </span>
                  <span className="answer-text">{option.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Explanation & Feedback */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`explanation-box ${isCorrect ? 'correct' : 'wrong'}`}
              >
                <div className="explanation-icon">
                  {isCorrect ? '🎉' : '💡'}
                </div>
                <div className="explanation-content">
                  <h3 className="explanation-title">
                    {isCorrect ? 'Perfekt!' : 'Nicht ganz...'}
                  </h3>
                  <p className="explanation-text">
                    {question.options[question.correctIndex].explanation}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Action Bar */}
      <div className="quiz-footer">
        <button
          onClick={handleNext}
          className={`btn-next ${answered === null ? 'disabled' : ''}`}
          disabled={answered === null}
        >
          {currentIndex === questions.length - 1 ? 'Fertig' : 'Weiter'} →
        </button>
      </div>
    </div>
  );
}
