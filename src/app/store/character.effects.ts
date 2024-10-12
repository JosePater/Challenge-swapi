import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FilmsService } from '../services/films.service';
import { loadListCharacters, loadListCharactersSuccess, loadListCharactersFailure } from './character.actions';

@Injectable()
export class ListCharacterEffects {
  loadListCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadListCharacters),
      mergeMap(({ page }) =>
        this._listCharacterService.loadListCharacters(page).pipe(
          map((response) => loadListCharactersSuccess({ characters: response.results })),
          catchError((error) => of(loadListCharactersFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private _listCharacterService: FilmsService) {}
}
