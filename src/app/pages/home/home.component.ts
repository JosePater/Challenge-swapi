import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { IFilm } from '../../models/film.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private _apiService = inject(ApiService); // Servicio
  films: IFilm[] = [];
  errorMessage: string = '';

  ngOnInit() {
    this._apiService.getFilms().subscribe({
      next: (data) => (this.films = data.results), // Datos obtenidos
      error: (err) => (this.errorMessage = 'Error al obtener las películas'), // No se accede a los datos
    });
  }
}
