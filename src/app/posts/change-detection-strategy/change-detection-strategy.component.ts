import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ChangeDetectionStrategyService} from './change-detection-strategy.service';
import {Meta, MetaDefinition} from '@angular/platform-browser';

@Component({
  selector: 'app-change-detection-strategy',
  templateUrl: './change-detection-strategy.component.html',
  styleUrls: ['./change-detection-strategy.component.css']
})
export class ChangeDetectionStrategyComponent implements OnInit {


  constructor(private http: HttpClient,
              private service: ChangeDetectionStrategyService,
              private meta: Meta) { }

  ngOnInit(): void {
    const metaDefinition: MetaDefinition = {
      name: 'Description',
      content: 'How change detection has an important impact on Angular applications.'};

    this.meta.addTag(metaDefinition);

  }


  getShowData(): boolean {
    return true;
  }

  getMethodExample(): number {
    return this.service.getCallCounter('standardCall');
  }

  callEmptyMethod(): void {}
}
