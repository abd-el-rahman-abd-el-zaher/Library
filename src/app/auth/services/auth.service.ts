import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILoggedIn, IUser } from '../models/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private inLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public loginObserver$ = this.inLogin.asObservable();
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.inLogin.next(false);
    this.router.navigate(['/']);
  }

  login(body: ILoggedIn) {
    let users: IUser[] = JSON.parse(localStorage.getItem('users') ?? '[]');

    let user = users.find((u) => u.email === body.email);

    if (!user) {
      alert('There is no such a user');
      return;
    }
    if ( user.password !== body.password) {
      alert('Password is incorrect');
      return;
    }
    this.inLogin.next(true);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', JSON.stringify(body.token));
    localStorage.setItem('rememberMe', JSON.stringify(body.rememberMe));
    this.router.navigate(['/portal/']);
  }
  register(user: IUser) {
    let users = JSON.parse(localStorage.getItem('users') ?? '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
