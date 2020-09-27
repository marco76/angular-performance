import { Component } from '@angular/core';
import {ChangeDetectionStrategyService} from './posts/change-detection-strategy/change-detection-strategy.service';
import {RouterModule} from '@angular/router';
import {ObservableServiceService} from './posts/observables/observable-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RouterModule]
})
export class AppComponent {
  title = 'ngperf';

  constructor(private observableService: ObservableServiceService) {
  }
}
