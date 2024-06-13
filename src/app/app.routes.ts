import { authGuard } from './auth/Guards/auth.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'portal', pathMatch: 'full' },
  {
    path: 'portal',
    loadComponent: () =>
      import('./layout/home/home.component').then((c) => c.HomeComponent),
    children: [
      {
        path: 'books',
        loadComponent: () =>
          import('./components/books/books.component').then(
            (c) => c.BooksComponent
          ),
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/components/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
];
