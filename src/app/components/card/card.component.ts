import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title;
  @Input() description;
  @Input() linkName?: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  openLink() {
    this.router.navigate([this.linkName]);
  }
}
