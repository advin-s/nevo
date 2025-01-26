import { Component } from '@angular/core';
import { TokenService } from '../services/auth/token.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


constructor(private tokenService:TokenService){}

onLogout(){
  this.tokenService.clearToken()
}

}
