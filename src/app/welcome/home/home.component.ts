import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private userService = inject(UserService)
  public user!:string

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next:(res:any) => {
        console.log(res);
        const {firstName} = res
        this.user = firstName
      }
    })
  }

}
