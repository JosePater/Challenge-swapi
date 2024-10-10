import { createReducer, on } from '@ngrx/store';
import { loadFilmsFailure, loadFilmsSuccess } from './film.actions';
import { IFilmState } from '../models/film.model';

// Estado inicial
export const initialState: IFilmState = {
  films: [],
  stateFilm: 'Loading',
};


export const filmReducer = createReducer(
  // Init
  initialState,
  //   Success
  on(loadFilmsSuccess, (state, { films }) => ({
    ...state,
    films,
    stateFilm: 'Loaded' as 'Loaded',
  })),
  //   Error
  on(loadFilmsFailure, (state) => ({
    ...state,
    stateFilm: 'Error' as 'Error',
  }))
);
