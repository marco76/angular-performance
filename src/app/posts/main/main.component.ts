import { Component, OnInit } from '@angular/core';
import {first, map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public fragment1;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/assets/main/fragment1.html', {responseType: 'text'})
      .pipe(
        first(),
         map(result => this.fragment1 = result.toString())
      ).subscribe();
  }

}
