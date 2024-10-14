import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IFilm, IFilmState } from '../../models/film.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import {
  selectAllFilms,
  selectFilmsStateLoading,
} from '../../store/film.selectors';
import { loadFilms } from '../../store/film.actions';
import { LoadingSpaceshipComponent } from '../../components/loading-spaceship/loading-spaceship.component';
import { LoadingSpinnerComponent } from "../../components/loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, LoadingSpaceshipComponent, LoadingSpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private _router = inject(Router);
  films$: Observable<IFilm[]>;
  filmState$: Observable<'Loading' | 'Loaded' | 'Error'>;

  constructor(private store: Store<IFilmState>) {
    this.films$ = this.store.select(selectAllFilms); // Lista de film
    this.filmState$ = this.store.select(selectFilmsStateLoading); // Estado
  }

  ngOnInit(): void {
    this.store.dispatch(loadFilms());
    
    this.filmState$.subscribe((data) => {
      console.log('Estado: ', data);
    });
  }

  navigation(id: number): void {
    this._router.navigate(['personajes-episodio', id]);
  }
}
