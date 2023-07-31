import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shekelToDollar'
})
export class ShekelToDollarPipe implements PipeTransform {

  transform(price: number, currency = "ILS"): unknown {
    if (currency == 'ILS') {
      let newPrice = Math.round(price * 3.5);
      return `${newPrice}₪`;
  }
  else{
    return price / 3.5;
  }

}
}