import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILoggedIn } from '../models/ILoggedIn.interface';
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
    this.inLogin.next(true);
    localStorage.setItem('user', JSON.stringify(body));
    localStorage.setItem('token', JSON.stringify(body.token));
    localStorage.setItem('rememberMe', JSON.stringify(body.rememberMe));
    this.router.navigate(['/portal/']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
