import { Component, inject, OnInit } from '@angular/core';
import { ICharacter } from '../../models/film.model';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-film',
  standalone: true,
  imports: [],
  templateUrl: './people-film.component.html',
  styleUrl: './people-film.component.css',
})
export class PeopleFilmComponent implements OnInit {
  private _router = inject(ActivatedRoute); // Ruta de navegación
  private _apiService = inject(ApiService); // Servicio swapi
  characters: ICharacter[] = [];
  filmTitle: string = '';
  errorMessage: string = '';

  ngOnInit(): void {
    // Obtiene el parámetro de la ruta de navegación
    const filmId = this._router.snapshot.paramMap.get('filmId');

    // Obtiene la película y los personajes basados en el filmId
    if (filmId) {
      this._apiService.getFilms().subscribe({
        // Success
        next: (response) => {
          const film = response.results[+filmId - 1]; // Obtener película por ID

          // Si ingresan un episodio inválido
          if (film) {
            this.filmTitle = film.title;
            // Obtiene los personajes de la película
            this._apiService
              .getCharacters(film.characters)
              .subscribe((characters: ICharacter[]) => {
                this.characters = characters;
              });
          } else {
            this.errorMessage = 'Verifique el número de episodio!';
          }
        },
        // Error
        error: (err) => (this.errorMessage = 'Error al cargar los personajes'),
      });
    }
  }
}
