import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import("./layout/home/home.component")
        .then(c => c.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import("./auth/components/login/login.component")
        .then(c => c.LoginComponent)
  }
];
