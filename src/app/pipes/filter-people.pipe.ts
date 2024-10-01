import { Pipe, PipeTransform } from '@angular/core';
import { ICharacter } from '../models/film.model';

@Pipe({
  name: 'filterPeople',
  standalone: true,
})
export class FilterPeoplePipe implements PipeTransform {
  transform(characters: ICharacter[], SearchTerm: string): ICharacter[] {
    // Devuelve lista completa si no hay búsqueda
    if (!SearchTerm || SearchTerm.trim() === '') {
      return characters;
    }

    // Retorna la lista de filtro determinado
    return characters.filter(
      (people) =>
        people.name.toLowerCase().includes(SearchTerm.toLowerCase()) || // Filtro por nombre
        people.eye_color.toLowerCase().includes(SearchTerm.toLowerCase()) || // Filtro según su color de ojos
        people.gender.toLowerCase().includes(SearchTerm.toLowerCase()) || // Filtro por género
        people.listFilms?.some(
          (film) => film.title.toLowerCase().includes(SearchTerm.toLowerCase()) // Filtro por films
        )
    );
  }
}
