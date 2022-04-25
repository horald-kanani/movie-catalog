import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'highl',
})
export class HighlightedDirective {
  isHighlighted: boolean = false;

  constructor() {
    console.log('Directive works');
  }

  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    this.isHighlighted = true;
  }
  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
  }
  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }
}
