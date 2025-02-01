import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';
import { LoaderService } from '../loader/loader.service';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    RouterOutlet,
    LoaderComponent,
    AsyncPipe,
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent implements OnInit {
  private loaderService = inject(LoaderService);
  public showLoader$ = new BehaviorSubject<boolean>(false);
  private cdRef = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.loaderService.loader.subscribe((res: any) =>{
      this.showLoader$.next(res), this.cdRef.detectChanges();
    }
    );
  }
}
