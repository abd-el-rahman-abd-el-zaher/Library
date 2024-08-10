import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  getCurrentUserPermissions() {
    let user = JSON.parse(localStorage.getItem('user') ?? '{}');
    return user.permissions;
  }
}
