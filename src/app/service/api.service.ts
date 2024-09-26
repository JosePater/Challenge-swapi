import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _http = inject(HttpClient);
  private urlBase: string = 'https://swapi.dev/api/films/';

  // Obtener todas las films
  getFilms(): Observable<any> {
    return this._http.get<any>(this.urlBase);
  }
}
