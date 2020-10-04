import { Component, OnInit } from '@angular/core';
import {first, map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Meta, MetaDefinition} from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public fragment1;

  constructor(private meta: Meta, private http: HttpClient) { }

  ngOnInit(): void {
    const metaDefinition: MetaDefinition = {
      name: 'Description',
      content: 'Best practices for improving the performance of Angular applications.'};

    this.meta.addTag(metaDefinition);
    this.http.get('/assets/main/fragment1.html', {responseType: 'text'})
      .pipe(
        first(),
         map(result => this.fragment1 = result.toString())
      ).subscribe();
  }

}
