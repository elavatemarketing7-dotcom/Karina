
export enum AppState {
  WELCOME = 'welcome',
  QUIZ = 'quiz',
  ANALYZING = 'analyzing',
  RESULT = 'result',
  MAIN_SITE = 'main_site'
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}
