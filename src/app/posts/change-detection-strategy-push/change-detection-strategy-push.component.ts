import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChangeDetectionStrategyService} from '../change-detection-strategy/change-detection-strategy.service';
import {first, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-change-detection-strategy-push',
  templateUrl: './change-detection-strategy-push.component.html',
  styleUrls: ['./change-detection-strategy-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionStrategyPushComponent implements OnInit {

  public fragment1: string;

  constructor(private http: HttpClient, private service: ChangeDetectionStrategyService) { }

  ngOnInit(): void {
    this.http.get('/assets/cd/fragment1.html', {responseType: 'text'})
      .pipe(
        first(),
         map(result => this.fragment1 = result.toString())
      ).subscribe();
  }

  getShowData(): boolean {
    return true;
  }

  getMethodExample(): number {
    return this.service.getCallCounter('onPushCall');
  }

  callEmptyMethod(): void {

  }

}
