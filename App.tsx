
import React, { useState, useEffect } from 'react';
import { AppState } from './types';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';
import MainSite from './components/MainSite';
import WelcomeOverlay from './components/WelcomeOverlay';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.WELCOME);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  const handleStartQuiz = () => setAppState(AppState.QUIZ);
  const handleGoToSite = () => setAppState(AppState.MAIN_SITE);
  
  const handleQuizFinish = (answers: string[]) => {
    setQuizAnswers(answers);
    setAppState(AppState.ANALYZING);
    // Simulate analyzing bar
    setTimeout(() => {
      setAppState(AppState.RESULT);
    }, 2500);
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Welcome Selection */}
      {appState === AppState.WELCOME && (
        <WelcomeOverlay onStartQuiz={handleStartQuiz} onGoToSite={handleGoToSite} />
      )}

      {/* Quiz Section */}
      {(appState === AppState.QUIZ || appState === AppState.ANALYZING) && (
        <Quiz 
          isAnalyzing={appState === AppState.ANALYZING} 
          onFinish={handleQuizFinish} 
          onSkip={handleGoToSite} 
        />
      )}

      {/* Result Section */}
      {appState === AppState.RESULT && (
        <ResultPage onContinue={handleGoToSite} quizAnswers={quizAnswers} />
      )}

      {/* Main Landing Page */}
      {appState === AppState.MAIN_SITE && (
        <MainSite />
      )}
    </div>
  );
};

export default App;
