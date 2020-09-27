import { Component } from '@angular/core';
import {ChangeDetectionStrategyService} from './posts/change-detection-strategy/change-detection-strategy.service';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RouterModule]
})
export class AppComponent {
  title = 'ngperf';
}
