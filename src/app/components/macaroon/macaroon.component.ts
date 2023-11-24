import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MacaroonsType} from "../../types/macaroons.type";
import {CartMacaroonService} from "../../services/cart-macaroon.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'macaroon',
  templateUrl: './macaroon.component.html',
  styleUrls: ['./macaroon.component.scss']
})
export class MacaroonComponent {
  @Input() macaroon: MacaroonsType;
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();


  constructor() {
    this.macaroon = {
      image: '',
      title: '',
      quantity: 0,
      price: 0
    }
  }

  addMacaroonToCart(): void {
    this.addToCartEvent.emit(`Товар "${this.macaroon.title}" добавлен в корзину!`);
  }
}
