import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { loadFilms, loadFilmsSuccess, loadFilmsFailure } from './film.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FilmsService } from '../services/films.service';

@Injectable()
export class FilmEffects {
  loadFilm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFilms),
      mergeMap(() =>
        this.filmsService.loadFilms().pipe(
          map((films) => loadFilmsSuccess({ films })),
          catchError((error) => of(loadFilmsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private filmsService: FilmsService) {}
}
