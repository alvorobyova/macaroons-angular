import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(phoneNumber: string): string {
    if (!phoneNumber || !/^\d{12}$/.test(phoneNumber)) {
      return phoneNumber;
    }

    return `+${phoneNumber.substr(0, 3)} (${phoneNumber.substr(3, 2)}) ${phoneNumber.substr(5, 3)}-${phoneNumber.substr(8, 2)}-${phoneNumber.substr(10, 2)}`;
  }

}
