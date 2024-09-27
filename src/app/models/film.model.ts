// Interface de las films
export interface IFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[]; // url de personajes
  planets: string[]; // url de planetas
  starships: string[]; // url de naves espaciales
  vehicles: string[]; // url de vehículos
  species: string[]; // url de especies
  url: string; // url de la película
  created: string;
  edited: string;
}

// Interface de la respuesta de films
export interface IFilmsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IFilm[];
}
