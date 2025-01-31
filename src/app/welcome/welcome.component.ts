import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent,RouterOutlet,LoaderComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit {
  private loaderService = inject(LoaderService)
  public showLoader:boolean = false
  ngOnInit(): void {
    this.loaderService.loader.subscribe((res:any) => this.showLoader = res)
  }
}
