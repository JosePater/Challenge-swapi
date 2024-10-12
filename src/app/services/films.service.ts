import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable, pipe, switchMap } from 'rxjs';
import {
  ICharacter,
  ICharactersResponse,
  IFilm,
  IFilmsResponse,
} from '../models/film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private baseUrl = 'https://swapi.dev/api/';
  private _http = inject(HttpClient);

  // Cargar lista de películas
  loadFilms(): Observable<IFilm[]> {
    return this._http
      .get<{ results: IFilm[] }>(this.baseUrl + 'films/')
      .pipe(map((response) => response.results));
  }

  // Cargar lista de personajes (10)
  loadListCharacters(page: number): Observable<ICharactersResponse> {
    return this._http.get<ICharactersResponse>(
      `${this.baseUrl}people?page=${page}`
    );
  }

  // // Cargar las films con los personajes asociados
  // loadFilms(): Observable<any[]> {
  //   return this._http.get<{ results: IFilm[] }>(`${this.baseUrl}`).pipe(
  //     switchMap((response) =>
  //       forkJoin(
  //         response.results.map((film) =>
  //           forkJoin(
  //             film.characters.map((url) =>
  //               this._http.get(url).pipe(map((char) => ({ ...char })))
  //             )
  //           ).pipe(map((characters) => ({ ...film, characters })))
  //         )
  //       )
  //     )
  //   );
  // }
}
