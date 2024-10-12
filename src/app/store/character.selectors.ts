import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IListCharacterState } from '../models/film.model';


export const selectListCharacterState = createFeatureSelector<IListCharacterState>('characters');

export const selectListCharacters10 = createSelector(
  selectListCharacterState,
  (state) => state.characters
);

export const selectListCharactersLoading = createSelector(
  selectListCharacterState,
  (state) => state.loading
);

export const selectListCharactersError = createSelector(
  selectListCharacterState,
  (state) => state.error
);