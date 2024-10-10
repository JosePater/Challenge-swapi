import { createReducer, on } from '@ngrx/store';
import { initialState } from './film.state';
import { loadFilmsFailure, loadFilmsSuccess } from './film.actions';

export const filmReducer = createReducer(
  // Estado inicial
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
