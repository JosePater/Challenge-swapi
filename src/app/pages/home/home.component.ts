import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  private _apiService = inject(ApiService); // Servicio 
  films: any[] = [];

  ngOnInit() {
    this._apiService.getFilms().subscribe({
      next: (data) => this.films = data.results
    });
  }

}
