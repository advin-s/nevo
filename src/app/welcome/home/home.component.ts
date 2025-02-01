import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../loader/loader.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private userService = inject(UserService)
  private loaderService = inject(LoaderService)
  public user!:string

  ngOnInit(): void {
    this.loaderService.showLoader()
    this.userService.getUser().subscribe({
      next:(res:any) => {
        console.log(res);
        const {firstName} = res
        console.log('called user');
        
        this.loaderService.hideLoader()
        this.user = firstName
      }
    })
  }

}
