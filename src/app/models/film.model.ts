// Interface de las films
export interface IFilm {
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  characters: string[]; // urls de personajes
  url: string; // url de la película
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
  eye_color: string;
  birth_year: string;
  gender: string;
  films: string[]; // urls de las películas en las que aparece el personaje
  url: string;
  listFilms: IFilm[]; // De lista de urls (films: string[]) a lista de films (json)
}

// Estado de film
export interface IFilmState {
  films: IFilm[];
  stateFilm: 'Loading' | 'Loaded' | 'Error';
}
