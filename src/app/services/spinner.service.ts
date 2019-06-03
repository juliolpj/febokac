import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private subject = new Subject<any>();
   
  constructor() {
  }

  on() {
    this.subject.next(true);
  }

  off() {
    this.subject.next(false);
  }

  getSpinner(): Observable<any> {
    return this.subject.asObservable();
  }

}