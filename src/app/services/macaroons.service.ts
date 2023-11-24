import { Injectable } from '@angular/core';
import {MacaroonsType} from "../types/macaroons.type";

@Injectable()
export class MacaroonsService {
  constructor() { }
  getMacaroons(): MacaroonsType[] {
    return [
      {
        image: '1.png',
        title: 'Макарун с малиной',
        quantity: 1,
        price: 1.25
      },
      {
        image: '2.png',
        title: 'Макарун с манго',
        quantity: 1,
        price: 1.70
      },
      {
        image: '3.png',
        title: 'Макарун с ванилью',
        quantity: 1,
        price: 2.55
      },
      {
        image: '4.png',
        title: 'Макарун с фисташкой',
        quantity: 1,
        price: 3.00
      },
    ]

  }
}
