export interface Person {
  id: number;
  name?: string;
  image?: string;
  species?: Species;
}

export interface Species {
  id: number;
  name: string;
}
