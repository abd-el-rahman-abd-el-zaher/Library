import { AuthService } from './../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  isLoggedIn: boolean = false;
  constructor(private authService: AuthService) {

  }
  ngOnInit(): void {
    this.authService.inLogin.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = !!localStorage.getItem('user');
    })

  }
  logout(){
    this.authService.logout();
  }
}
