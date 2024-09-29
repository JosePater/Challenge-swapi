import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ICharacter, IFilm } from '../../models/film.model';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css',
})
export class PersonajesComponent implements OnInit {
  private _apiService = inject(ApiService); // Servicio api
  personajes: ICharacter[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    this._apiService.getAllCharacters().subscribe({
      // Success
      next: (data) => {
        const personajes = data.results;

        // Para cada personaje, obtener las films asociadas
        personajes.forEach((people: ICharacter) => {
          this._apiService
            .getAssociatedFilm(people.films)
            .subscribe((assoFilm) => {
              people.listFilms = assoFilm;
            });
          this.personajes = personajes; // Personajes con las películas asociadas (json)
        });
      },
      // error
      error: () => (this.errorMessage = 'Error al obtener los personajes'),
    });
  }
}
