import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ICharacter } from '../../models/film.model';

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
        this.personajes = data.results;
        console.log(this.personajes.length, this.personajes);
      },
      // error
      error: () => (this.errorMessage = 'Error al obtener los personajes'),
    });
  }
}
