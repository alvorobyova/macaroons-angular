import { Injectable } from '@angular/core';

@Injectable()
export class ScrollService {
  scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
