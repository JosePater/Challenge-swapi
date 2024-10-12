import { createAction, props } from '@ngrx/store';
import { ICharacter } from '../models/film.model';

export const loadListCharacters = createAction(
  '[Character] Load List Characters',
  props<{ page: number }>()
);

// Success
export const loadListCharactersSuccess = createAction(
  '[Character] Load List Characters Success',
  props<{ characters: ICharacter[] }>()
);

// Error
export const loadListCharactersFailure = createAction(
  '[Character] Load List Characters Failure',
  props<{ error: any }>()
);
