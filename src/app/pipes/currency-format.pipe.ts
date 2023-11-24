import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(price: number): string {
    return price.toFixed(2).replace(',', '.') + ' руб.';
  }

}
