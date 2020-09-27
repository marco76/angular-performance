import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appSafeHtml]'
})
export class SafeHtmlDirective {

  constructor(el: ElementRef) {
  }

}
