import {
  Directive, HostBinding, HostListener,
  Input} from '@angular/core';

@Directive({
  selector: '[btnBackground]'
})
export class BtnBackgroundDirective {

  @Input() btnDefaultBgColor: string = '#71081EFF';
  @Input() btnHoverBgColor: string = '#D7485CFF';

  constructor() {  }

  @HostBinding('style.backgroundColor')
  private _bgColor: string = this.btnDefaultBgColor;

  @HostListener('mouseenter')
  onMouseEnter() {
    this._bgColor = this.btnHoverBgColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this._bgColor = this.btnDefaultBgColor;
  }

}
