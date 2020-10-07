import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Meta, MetaDefinition} from '@angular/platform-browser';
import {first, map} from 'rxjs/operators';

@Component({
  selector: 'app-angular-version',
  templateUrl: './angular-version.component.html',
  styleUrls: ['./angular-version.component.css']
})
export class AngularVersionComponent implements OnInit {
  public fragment1: string;

  constructor(private meta: Meta, private http: HttpClient) { }

  ngOnInit(): void {
    const metaDefinition: MetaDefinition = {
      name: 'Description',
      content: 'Angular 9 Ivy vs Angular 8. Why Ivy is good and better.'};

    this.meta.addTag(metaDefinition);
    this.http.get('/assets/posts/version/fragment1.html', {responseType: 'text'})
      .pipe(
        first(),
        map(result => this.fragment1 = result.toString())
      ).subscribe();
  }

}
