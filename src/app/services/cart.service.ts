import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  countQuantity: number = 0;
  countPrice: number = 0;

  constructor() { }
}
