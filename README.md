# Angular Property Gallery

Responsive Angular 14 SPA that showcases real-estate listings backed by a reusable data service. The UI pairs Angular component architecture with Bootstrap 5 styling and Font Awesome icons to present a polished property catalogue fed by JSON assets.

## Table of Contents
- [Overview](#overview)
- [Key Features](#key-features)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Configuration](#configuration)
- [Testing & Quality](#testing--quality)
- [Extensibility Ideas](#extensibility-ideas)

## Overview
- The landing page renders a Bootstrap navigation bar and a responsive grid of property cards.
- Property data is pulled through an Angular service that consumes `HttpClient` and serves JSON from `src/data/properties.json` (bundled via the CLI assets pipeline).
- Each card presents a property’s name, type, price, and action buttons with Font Awesome icons.

## Key Features
- **Componentised layout** – `NavBarComponent`, `PropertyListComponent`, and `PropertyCardComponent` keep concerns isolated and reusable.
- **Shared data service** – `HousingService` centralises API interaction and can be switched from local JSON to a remote endpoint without touching the components.
- **Asset-driven data** – Angular CLI asset configuration exposes the `/data` directory at runtime, simplifying mock data management.
- **Bootstrap integration** – Global styling imports `bootstrap.min.css`, giving responsive layout primitives out of the box.
- **Iconography** – Font Awesome kit (loaded in `index.html`) powers the action buttons on property cards.

## Architecture
| Layer | Description |
| --- | --- |
| `AppModule` | Wires BrowserModule, HttpClientModule, and declares UI components. |
| `NavBarComponent` | Fixed-top Bootstrap navigation shell. |
| `PropertyListComponent` | Fetches property data on init and renders each entry. |
| `PropertyCardComponent` | Presentational card showing property metadata and action buttons. |
| `HousingService` | Injects `HttpClient`, exposes `getAllProperties()` returning an Observable, currently pointing to `/data/properties.json`. |

## Project Structure
```
src/
  app/
    app.component.*          # Shell and layout container
    nav-bar/                 # Navigation component
    property/
      property-list/         # Fetch + render list
      property-card/         # Individual card UI
    service/housing.service.ts
  assets/                    # Images, shared assets
  data/properties.json       # Local mock data served via CLI assets
  environments/              # Angular environment configs
  styles.css                 # Custom global styles (Bootstrap imported via angular.json)
```

## Prerequisites
- Node.js ≥ 16 and npm ≥ 8.
- Angular CLI 14 (`npm install -g @angular/cli@14`) if you prefer using the global `ng` command.

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
   then open `http://localhost:4200`.
3. Edit files under `src/app` and the browser will live-reload with your changes.

## Available Scripts
- `npm start` – run `ng serve` in development mode with live reload.
- `npm run build` – produce an optimised production build in `dist/app`.
- `npm run watch` – rebuild on file changes using the development configuration.
- `npm test` – execute Karma + Jasmine unit tests (headless Chrome by default).

## Configuration
- **Data source**: `HousingService` currently requests `/data/properties.json`. To plug into a remote API, replace the URL with your endpoint or read it from an environment file (e.g. `environment.ts`) and ensure CORS is enabled.
- **Assets**: `angular.json` includes both `src/assets` and `src/data`; any JSON/photos dropped there are bundled by the CLI and accessible via `/assets/...` or `/data/...`.
- **Icons**: Font Awesome kit is referenced in `src/index.html`. Replace the kit URL with your own if necessary.

## Testing & Quality
- Unit tests live next to their components (for example `app.component.spec.ts`). Run them with `npm test`.
- Jasmine/Karma configuration resides in `karma.conf.js` and `tsconfig.spec.json`. Enable code coverage by setting `codeCoverage` to `true` or using the `--code-coverage` flag (`ng test --code-coverage`).
- Linting is not configured yet. Consider adding `@angular-eslint` for consistent style enforcement.

## Extensibility Ideas
- Replace the local JSON feed with a backend API and add CRUD flows for property management.
- Implement routing to show individual property detail pages (`[routerLink]` + `ActivatedRoute`).
- Add reactive forms for filtering or submitting new properties.
- Capture HTTP errors in `PropertyListComponent` and surface user-friendly notifications.
- Expand test coverage to include `HousingService` and component interaction tests with Angular’s TestBed utilities.
