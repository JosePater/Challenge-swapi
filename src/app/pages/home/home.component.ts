import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { IFilm } from '../../models/film.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private _apiService = inject(ApiService); // Servicio
  private _router = inject(Router); // Ruta
  films: IFilm[] = []; // Lista de films
  errorMessage: string = '';

  ngOnInit() {
    this._apiService.getFilms().subscribe({
      next: (data) => {
        const films = data.results;
        // Para cada película, obtener los personajes
        films.forEach((film: IFilm) => {
          this._apiService
            .getCharacters(film.characters)
            .subscribe((characters) => {
              film.listCharacters = characters; // Reemplaza las urls con los nombres de los personajes
            });
        });

        this.films = films; // Films con los personajes (json)
      },
      error: () => (this.errorMessage = 'Error al obtener las películas'), // No se accede a los datos
    });
  }

  navigation(id: number): void {
    this._router.navigate(['personajes-episodio', id]);
  }
}
