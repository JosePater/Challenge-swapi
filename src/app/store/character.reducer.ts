import { createReducer, on } from '@ngrx/store';
import {
  loadListCharacters,
  loadListCharactersSuccess,
  loadListCharactersFailure,
} from './character.actions';
import { IListCharacterState } from '../models/film.model';

// Estado inicial
const initialState: IListCharacterState = {
  characters: [],
  loading: false,
  error: null,
};

export const listCharacterReducer = createReducer(
  // Init
  initialState,
  on(loadListCharacters, (state) => ({ ...state, loading: true })),
  // Success
  on(loadListCharactersSuccess, (state, { characters }) => ({
    ...state,
    loading: false,
    characters,
    error: null,
  })),
  // Error
  on(loadListCharactersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
