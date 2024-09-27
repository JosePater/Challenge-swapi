import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { PeopleFilmComponent } from './pages/people-film/people-film.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'personajes-episodio/:filmId', component: PeopleFilmComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
