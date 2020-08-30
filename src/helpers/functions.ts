import { MAX_ITEMS } from './constants';

export const generateCorrectAnswer = (): number => {
  return Math.floor(Math.random() * MAX_ITEMS);
};

export function shuffleAnswers<T>(arr: T[]): T[] {
  return arr.sort(() => Math.random() - 0.5);
}
