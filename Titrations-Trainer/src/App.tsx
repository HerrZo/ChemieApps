import { useState, useEffect } from 'react';
import { GuideMode } from './components/GuideMode';
import { PracticeMode } from './components/PracticeMode';

function App() {
    const [isDark, setIsDark] = useState(false);
    const [activeTab, setActiveTab] = useState<'lernen' | 'ueben'>('lernen');

    useEffect(() => {
        const stored = localStorage.getItem('darkMode') === 'true';
        setIsDark(stored);
        if (stored) document.documentElement.classList.add('dark');
    }, []);

    const toggleTheme = () => {
        const newDark = !isDark;
        setIsDark(newDark);
        localStorage.setItem('darkMode', newDark.toString());
        if (newDark) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    };

    return (
        <div className="min-h-screen pb-16 flex flex-col">
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Theme umschalten">
                {isDark ? '☀️' : '🌙'}
            </button>
            
            <header className="pt-10 pb-6 px-4 text-center bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="max-w-5xl mx-auto">
                    <a href="../index.html" className="inline-flex flex-col sm:flex-row items-center text-chem-600 hover:text-chem-700 dark:text-chem-500 mb-4 transition-colors text-sm font-semibold group">
                        <span className="flex items-center gap-1"><span aria-hidden="true">←</span> Zurück zur Übersicht</span>
                    </a>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
                        Titrations-Trainer
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                        Lerne und übe, wie man die Konzentration einer Lösung mittels Titration bestimmt.
                    </p>
                </div>
            </header>
            
            <div className="max-w-5xl mx-auto px-4 mt-6 flex-grow w-full">
                <nav className="flex space-x-1 border-b border-slate-200 dark:border-slate-700 mb-6" aria-label="Tabs">
                    <button 
                        className={`tab-btn px-6 py-3 text-lg ${activeTab === 'lernen' ? 'active' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
                        onClick={() => setActiveTab('lernen')}
                        aria-current={activeTab === 'lernen' ? 'page' : undefined}
                    >
                        📘 Lernen
                    </button>
                    <button 
                        className={`tab-btn px-6 py-3 text-lg ${activeTab === 'ueben' ? 'active' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}
                        onClick={() => setActiveTab('ueben')}
                        aria-current={activeTab === 'ueben' ? 'page' : undefined}
                    >
                        🎯 Üben
                    </button>
                </nav>
                
                <main id="main">
                    {activeTab === 'lernen' ? <GuideMode /> : <PracticeMode />}
                </main>
            </div>
            
            <footer className="mt-12 mb-4 text-center text-sm text-slate-500">
                Johannes-Scharrer-Gymnasium · Zollfrank
            </footer>
        </div>
    );
}

export default App;
