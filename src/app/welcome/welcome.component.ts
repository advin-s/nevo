import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
