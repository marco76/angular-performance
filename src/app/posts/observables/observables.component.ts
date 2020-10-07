import { Component, OnInit } from '@angular/core';
import {first, map, take, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {ObservableServiceService} from './observable-service.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  public fragment1;
  private localCounter = 0;
  private serviceCounter = 0;
  public subscriptions: Subscription[] = [];
  private finishMessage = 'This is the last notification :)';
  constructor(private http: HttpClient, private service: ObservableServiceService) { }

  ngOnInit(): void {
    this.http.get('/assets/observables/fragment1.html', {responseType: 'text'})
      .pipe(
        first(),
        map(result => this.fragment1 = result.toString())
      ).subscribe();
  }

  onStartObservable(): void {
    this.service.startObservable();
    this.subscriptions.push(this.service.message$.pipe(
      take(2),
      map(result => {
        window.alert(++this.serviceCounter + '/2: ' + result + this.getNotification());
      })
    ).subscribe());
}

  getNotification(): string {
    if (this.serviceCounter === 2) {
      return ' ' + this.finishMessage;
    } else { return ''; }
  }
  onStartComponentObservable(): void {
    const localObservable$ =  new Observable(
      observer => {
        window.alert('Starting COMPONENT observable, continue the navigation!');
        setInterval(() => observer.next(++this.localCounter + '/2: LOCAL observable running'), 10000);
      }
    );

    this.subscriptions.push(localObservable$.pipe(
      take(2),
      map(result => window.alert(result))
    ).subscribe());
  }

  onStopObservables(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.subscriptions = [];
  }
}
