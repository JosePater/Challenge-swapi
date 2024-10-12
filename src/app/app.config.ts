import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { filmReducer } from './store/film.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { FilmEffects } from './store/film.effects';
import { listCharacterReducer } from './store/character.reducer';
import { ListCharacterEffects } from './store/character.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(), // servicio http
    provideStore({
      film: filmReducer, // Reducer de film
      characters: listCharacterReducer // REducer character
    }),
    provideEffects(FilmEffects, ListCharacterEffects), // Effects
    provideStoreDevtools(),
  ],
};
