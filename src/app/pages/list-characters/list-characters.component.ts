import { Component, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter } from '../../models/film.model';
import { Store } from '@ngrx/store';
import {
  selectListCharacters10,
  selectListCharactersError,
  selectListCharactersLoading,
} from '../../store/character.selectors';
import { loadListCharacters } from '../../store/character.actions';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list-characters',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './list-characters.component.html',
  styleUrl: './list-characters.component.css',
})
export class ListCharactersComponent {
  store = inject(Store);
  characters$: Observable<ICharacter[]> =
    this.store.select(selectListCharacters10);
  loading$: Observable<boolean> = this.store.select(selectListCharactersLoading);
  errorMessage$: Observable<string | null> = this.store.select(
    selectListCharactersError
  );

  // characters: ICharacter[] = [];

  constructor() {
    this.store.dispatch(loadListCharacters({ page: 1 }));
    // this.characters$.subscribe((characters) => (this.characters = characters));

    this.loading$.subscribe((data) => {
      console.log('Estado: ', data);
    });
  }
}
