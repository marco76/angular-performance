import { Component, OnInit } from '@angular/core';
import {Meta, MetaDefinition} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {first, map} from 'rxjs/operators';

@Component({
  selector: 'app-prod-mode',
  templateUrl: './prod-mode.component.html',
  styleUrls: ['./prod-mode.component.css']
})
export class ProdModeComponent implements OnInit {

  public fragment1: string;

  constructor(private meta: Meta, private http: HttpClient) { }

  ngOnInit(): void {
    const metaDefinition: MetaDefinition = {
      name: 'Description',
      content: 'Angular performances with prod mode vs dev mode'};

    this.meta.addTag(metaDefinition);
    this.http.get('/assets/posts/prod-mode/fragment1.html', {responseType: 'text'})
      .pipe(
        first(),
        map(result => this.fragment1 = result.toString())
      ).subscribe();
  }
}
