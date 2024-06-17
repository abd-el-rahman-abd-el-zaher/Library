import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [NavBarComponent,  RouterModule,],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.css'
})
export class PortalComponent {

}
