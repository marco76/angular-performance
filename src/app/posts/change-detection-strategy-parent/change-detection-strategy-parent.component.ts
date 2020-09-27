import { Component, OnInit } from '@angular/core';
import {first, map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-change-detection-strategy-parent',
  templateUrl: './change-detection-strategy-parent.component.html',
  styleUrls: ['./change-detection-strategy-parent.component.css']
})
export class ChangeDetectionStrategyParentComponent implements OnInit {
  public fragment1: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/assets/cd/fragment1.html', {responseType: 'text'})
      .pipe(
        first(),
        tap(result => console.log("backend called")),
        map(result => this.fragment1 = result.toString())
      ).subscribe();
  }
  onClick(): void {}
}
