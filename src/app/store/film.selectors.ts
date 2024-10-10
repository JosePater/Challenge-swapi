import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IFilmState } from '../models/film.model';

// export const selectFilmState = (state: any) => state.film;
export const selectFilmState = createFeatureSelector<IFilmState>('film');

// Lista de films
export const selectAllFilms = createSelector(
  selectFilmState,
  (state: IFilmState) => state.films
);

// Estado de films
export const selectFilmsStateLoading = createSelector(
  selectFilmState,
  (state: IFilmState) => state.stateFilm
);

