import { createAction, props } from '@ngrx/store';
import { IFilm } from '../models/film.model';

export const loadFilms = createAction('[Film] Load Films');

// Success
export const loadFilmsSuccess = createAction(
  '[Film] Load Films Success',
  props<{ films: IFilm[] }>()
);

// Error
export const loadFilmsFailure = createAction(
  '[Film] Load Films Failure',
  props<{ error: any }>()
);
