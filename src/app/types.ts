export interface Card {
  german: string;
  english: string;
  priority: number;
}

export interface Module {
  id: string;
  title: string;
  cards: Card[];
}
