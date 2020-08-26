import { MAX_LEVELS } from './constants'

export const generateCorrectAnswer = (): number => {
  return Math.floor(Math.random() * MAX_LEVELS);
}

// export const shuffleAnswers<T> = (arr: T[]): T[] => {
//   return arr.sort(() => Math.random() - 0.5);
// }