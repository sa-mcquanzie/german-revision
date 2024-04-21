import { Card } from "./types";


export const parsePromptResponseTest = (text: string): Card[] => {
  const cards: Card[] = [];

  const lines = text.split('\n');
  
  lines.forEach((line) => {
    if (line.trim() !== '') {
      const [german, english] = line.split(' = ');
      cards.push({ german, english, priority: 1 });
    }
  });

  return cards
}

