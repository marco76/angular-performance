import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableServiceService {

  constructor() { }

  message$: Subject<string>;

  public startObservable(): void {
    this.message$ = new Subject<string>();
    window.alert('Starting SERVICE observable, continue the navigation!');
    setInterval(() => this.message$.next('Service Observable still running'), 10000);
  }
}
