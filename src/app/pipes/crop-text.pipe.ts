import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cropText'
})
export class CropTextPipe implements PipeTransform {
  transform(text: string): string {
    return text.length > 95 ? `${text.substring(0, 92)}...` : text; // всего символов получается 95 вместе с точками
  }
}
