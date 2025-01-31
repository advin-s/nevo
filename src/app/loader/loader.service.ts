import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public loader = new Subject()
  constructor() { }

  showLoader(){
    this.loader.next(true)
  }

  hideLoader(){
    this.loader.next(false)
  }
  
}
