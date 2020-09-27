import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ChangeDetectionStrategyService} from './change-detection-strategy.service';

@Component({
  selector: 'app-change-detection-strategy',
  templateUrl: './change-detection-strategy.component.html',
  styleUrls: ['./change-detection-strategy.component.css']
})
export class ChangeDetectionStrategyComponent implements OnInit {


  constructor(private http: HttpClient, private service: ChangeDetectionStrategyService) { }

  ngOnInit(): void {
  }


  getShowData(): boolean {
    return true;
  }

  getMethodExample(): number {
    return this.service.getCallCounter('standardCall');
  }

  callEmptyMethod(): void {}
}
