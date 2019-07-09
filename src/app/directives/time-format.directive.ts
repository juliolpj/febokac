import { Directive, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTimeFormat]',
  host: {
    "[value]": "appTimeFormat",
    "(input)": "formatear($event.target.value)"
  }
})
export class TimeFormatDirective {
  @Input('appTimeFormat') appTimeFormat: string;
  @Output() appTimeFormatChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.appTimeFormat = this.appTimeFormat || "";
    this.formatear(this.appTimeFormat);
  }

  formatear(value: string) {
    const char = value.slice(-1);
    const valoresPermitidos = ['0','1','2','3','4','5','6','7','8','9','0','.'];
    
    if ([3,6,9].includes(value.length) ) {
      console.warn(`No debió tener longitud  ${value.length} dígitos nunca`);
      value = value.slice(0, value.length - 2);
    } else if (char === '.') {
      if (value.length < 3) {
        value = '00:';
      } else if (value.length < 6) {
        value = value.substr(0,3) + '00:';
      } else if (value.length < 9) {
        value = value.substr(0,6) + '00:';
      } else if (value.length < 11) {
        value = value.substr(0,9) + '00';
      }
    } else if ( !valoresPermitidos.includes(char) ) {
      value = value.slice(0, value.length - 1);
    } else if (value.length === 1 && !['0','1','2'].includes(char) ) {
        value = value.slice(0, value.length - 1);
    } else if (value.length === 2) { 
      if (value[0] === '2' && !['0','1','2','3','4'].includes(char)) {
        value = value.slice(0, value.length - 1);
      } else {
        value = value + ':';
      }
    } else if (value.length === 4) {
      if (char === '6' &&  value.substr(0,2) !== '00') {
        value = value.slice(0, value.length - 1);
      } else if ( !['0','1','2','3','4','5','6'].includes(char)) {
        value = value.slice(0, value.length - 1);
      }
    } else if (value.length === 5) {
      if ( value[3] === '6' && char !== '0' ) {
        value = value.slice(0, value.length - 1);
      } else {
        value = value + ':';
      }
    } else if (value.length === 7) {
      if (char === '6' &&  value.substr(3,2) !== '00') {
        value = value.slice(0, value.length - 1);
      } else if ( !['0','1','2','3','4','5','6'].includes(char)) {
        value = value.slice(0, value.length - 1);
      }
    } else if (value.length === 8) {
      if ( value[6] === '6' && char !== '0' ) {
        value = value.slice(0, value.length - 1);
      } else {
        value = value + '.';
      }
    } 

    this.setValue(value);
  }
  
  setValue(value: string) {
    this.el.nativeElement.value = value;
    this.appTimeFormatChange.next(value);
  }
}
