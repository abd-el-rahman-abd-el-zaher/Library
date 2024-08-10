import { authGuard } from './auth/Guards/auth.guard';
import { Routes } from '@angular/router';
import { notAuthGuard } from './auth/Guards/not-auth.guard';
import { Permissions } from './auth/Configs/Permissions';

export const routes: Routes = [
  { path: '', redirectTo: 'portal', pathMatch: 'full' },
  {
    path: 'portal',
    loadComponent: () =>
      import('./layout/portal/portal.component').then((c) => c.PortalComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/home/home.component').then(
            (c) => c.HomeComponent
          ),
      },
      {
        path: 'books',
        loadComponent: () =>
          import('./components/books/books.component').then(
            (c) => c.BooksComponent
          ),
        canActivate: [authGuard],
        data: { title: 'Books', displaySidebar: true, allowedClaims: [Permissions.Books.View] }, 
      },
    ],
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/components/auth/auth.component').then(
        (c) => c.AuthComponent
      ),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./auth/components/login/login.component').then(
            (c) => c.LoginComponent
          ),
          canActivate: [notAuthGuard],
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./auth/components/register/register.component').then(
            (c) => c.RegisterComponent
          ),
          canActivate: [notAuthGuard],
      },
    ],
  },
  {
    path: 'not-auth',
    loadComponent: () =>
      import('./auth/components/not-auth/not-auth.component').then(
        (c) => c.NotAuthComponent
      ),
    children: [
      {
        path: 'forbidden',
        loadComponent: () =>
          import('./auth/components/forbidden/forbidden.component').then(
            (c) => c.ForbiddenComponent
          ),
          
      },
   
    ],
  },
];
