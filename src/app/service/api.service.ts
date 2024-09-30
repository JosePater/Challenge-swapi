import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import {
  ICharacter,
  ICharactersResponse,
  IFilm,
  IFilmsResponse,
} from '../models/film.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _http = inject(HttpClient);
  private urlBase: string = 'https://swapi.dev/api/';

  // Obtener todas las films
  getFilms(): Observable<IFilmsResponse> {
    return this._http.get<IFilmsResponse>(this.urlBase + 'films/');
  }

  // Obtener films asociadas al personaje
  getAssociatedFilm(filmsUrl: string[]): Observable<IFilm[]> {
    const filmsRequiest = filmsUrl.map((url) => this._http.get<IFilm>(url));
    return forkJoin(filmsRequiest); // Múltiples solicitudes de films en paralelo
  }

  // Obtener personajes de la film
  getCharacters(personajesUrls: string[]): Observable<ICharacter[]> {
    const personajesRequiest = personajesUrls.map((url) =>
      this._http.get<ICharacter>(url)
    );
    return forkJoin(personajesRequiest); // Múltiples solicitudes de personajes en paralelo
  }

  // Obtener los personajes de Star Wars (lista de 10)
  getListCharacters(num: number): Observable<ICharactersResponse> {
    return this._http.get<ICharactersResponse>(
      this.urlBase + `people/?page=${num}`
    );
  }
}
