import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { ICharacter, ICharactersResponse, IFilmsResponse } from '../models/film.model';

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

  // Obtener personajes del film
  getCharacters(personajesUrls: string[]): Observable<ICharacter[]> {
    const personajesRequiest = personajesUrls.map((url) =>
      this._http.get<ICharacter>(url)
    );
    return forkJoin(personajesRequiest); // Múltiples solicitudes de personajes en paralelo
  }

  // Obtener todos los personajes de Star Wars
  getAllCharacters(): Observable<ICharactersResponse> {
    return this._http.get<ICharactersResponse>(this.urlBase + 'people/');
  }
}