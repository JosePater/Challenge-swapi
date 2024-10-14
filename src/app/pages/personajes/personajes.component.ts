import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ICharacter, ICharactersResponse } from '../../models/film.model';
import { FormsModule } from '@angular/forms';
import { FilterPeoplePipe } from '../../pipes/filter-people.pipe';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [FormsModule, FilterPeoplePipe],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css',
})
export class PersonajesComponent implements OnInit {
  private _apiService = inject(ApiService); // Servicio api
  personajes: ICharacter[] = [];
  errorMessage: string = '';
  currentPage: number = 1; // Página actual: se basa en la página siguiente
  dataResp!: ICharactersResponse; // Guarda la respuesta de las páginas
  filterPeople = ''; // Filtro de personas ngModel

  ngOnInit(): void {
    this.getCharacters(this.currentPage);
  }

  // Ir a la siguiente página de personajes
  nextPage() {
    if (this.dataResp.next) {
      this.getCharacters((this.currentPage += 1));
    } else if (this.dataResp.previous) {
      alert(`Esta es la última página`);
    }
  }

  // Ir a la anterior página de personajes
  previousPage() {
    if (this.currentPage > 1) {
      this.getCharacters(this.currentPage - 1);
    } else {
      alert('Esta es la primera página');
    }
  }

  // Establecer número de página
  setPageNumber(dataResponse: ICharactersResponse) {
    let num;
    if (dataResponse.next) {
      const url = dataResponse.next;
      const pageNext = url!.split('=')[1]; // Obteniene el número de página de la url next
      num = parseInt(pageNext) - 1; // Le resta 1 a la página siguiente
      this.currentPage = num; // Página actual
    } else if (!dataResponse.next && dataResponse.previous) {
      console.log('última página');
    }
  }

  // Obtener personajes
  getCharacters(numPage: number) {
    this.filterPeople = '';
    this._apiService.getListCharacters(numPage).subscribe({
      // Success
      next: (data) => {
        this.dataResp = data;
        const personajes = data.results;
        // Si hay página siguiente
        if (data.next || data.previous) {
          this.setPageNumber(data); // Establecer la página actual
          // Para cada personaje, obtener las films asociadas
          personajes.forEach((people: ICharacter) => {
            this._apiService
              .getAssociatedFilm(people.films)
              .subscribe((assoFilm) => {
                people.listFilms = assoFilm;
              });
            this.personajes = personajes; // Personajes con las películas asociadas (json)
          });
        } else {
          console.log('No hay más página para mostrar');
        }
      },
      // error
      error: () => (this.errorMessage = 'Error al obtener los personajes'),
    });
  }
}
