import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILoggedIn } from '../models/ILoggedIn.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private inLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public loginObserver$ = this.inLogin.asObservable();
  constructor() {}
  
  logout() {
    localStorage.removeItem('user');
    this.inLogin.next(false);
  }

  login(body: ILoggedIn) {
    this.inLogin.next(true);
    localStorage.setItem('user', JSON.stringify(body));
    localStorage.setItem('rememberMe', JSON.stringify(body.rememberMe));
  }
}
