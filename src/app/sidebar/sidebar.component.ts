import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

ngOnInit(): void {
   $(document).ready(function () {
     $('[data-bs-toggle="tooltip"]').tooltip();
   });
}
}
