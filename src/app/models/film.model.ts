// Interface de las films
export interface IFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];  // urls de personajes
  planets: string[];     // urls de planetas
  starships: string[];   // urls de naves espaciales
  vehicles: string[];    // urls de vehículos
  species: string[];     // urls de especies
  url: string;           // url de la película
  created: string;
  edited: string;
  listCharacters?: ICharacter[] | null; // De lista de urls (characters: string[]) a lista de personajes (json)
}

// Interface de la respuesta de films
export interface IFilmsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IFilm[];
}

// Interface de la respuesta de characters
export interface ICharactersResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ICharacter[];
}

// Interface de los personajes
export interface ICharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;   // url del planeta natal
  films: string[];     // urls de las películas en las que aparece el personaje
  species: string[];   // urls de especies a las que pertenece el personaje
  vehicles: string[];  // urls de vehículos
  starships: string[]; // urls de naves espaciales
  created: string;
  edited: string;
  url: string;
  listFilms: IFilm[]; // De lista de urls (films: string[]) a lista de films (json)
}
