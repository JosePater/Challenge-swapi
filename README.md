# Frontend Challenge Angular

<p>
    <img src="https://img.shields.io/badge/STATUS-TERMINADO-green">
    <img src="https://img.shields.io/badge/Angular-17.2.3-red">
    <img src="https://img.shields.io/badge/TailwindCSS-blue">
    <img src="https://img.shields.io/badge/Git/GitHub-black">
</p>

## API Star Wars

### Descripción

Este proyecto implementa una aplicación web basada en las películas de Star Wars, utilizando Angular. La aplicación consume datos de la API SWAPI, que proporciona información completa sobre los 6 Films de Star Wars.

## Funcionalidades

### Fuente de Datos

- La aplicación utiliza la API de SWAPI: https://swapi.dev/

### Lista de Films

La aplicación muestra cada film con la siguiente información:

1. Nombre
2. Número de episodio
3. Director
4. Un enlace que dirige a la página de personajes asociados al film

### Página de Personajes

La aplicación limita la visualización a 10 personajes por página. La página cuenta con dos botones para ir a la página siguiente y anterior. <br />
Cada personaje en la lista muestra:

1. Nombre
2. Color de ojos
3. Género
4. Lista de films asociados (nombres)

### Filtros

La página de personajes incluye los siguientes filtros de búsqueda:

1. Nombre
2. Color de ojos
3. Género
4. Film asociada

### Estructura

```javascript
src/APP
│   app.component.css
│   app.component.html
│   app.component.ts
│   app.config.ts
│   app.routes.ts
│
├───assets
│   └───images
├───components
│   ├───loading-spaceship
│   │       loading-spaceship.component.ts
│   │
│   └───loading-spinner
│           loading-spinner.component.ts
│
├───models
│       film.model.ts
│
├───pages
│   ├───home
│   │       home.component.css
│   │       home.component.html
│   │       home.component.ts
│   │
│   ├───people-film
│   │       people-film.component.css
│   │       people-film.component.html
│   │       people-film.component.ts
│   │
│   └───personajes
│           personajes.component.css
│           personajes.component.html
│           personajes.component.ts
│
├───pipes
│       filter-people.pipe.ts
│
├───service
│       api.service.ts
│
├───services
│       films.service.ts
│
└───store
        film.actions.ts
        film.effects.ts
        film.reducer.ts
        film.selectors.
```

## Tecnologías

- **Framework de Frontend:** Angular 17.2.3
- **Framework de CSS:** TailwindCSS
- **Control de versiones:** Git / GitHuub

```bash
npm install          # Instala las dependencias del proyecto.
ng serve             # Inicia el servidor de desarrollo (http://localhost:4200/).
ng build             # Compila la aplicación para producción.

```

## Desarrollador:

| [<img src="https://avatars.githubusercontent.com/u/120583187?v=4" width=115><br><sub>José Luis Paternina Martínez</sub>](https://github.com/JosePater)
|:------------------------------------------------------------------------------------------------------------------------------------------------------:|

© Derechos Reservados
