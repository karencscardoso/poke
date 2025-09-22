
import { provideRouter, Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TesteComponent } from './pages/teste/teste.component';

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'teste',
    component: TesteComponent,
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
