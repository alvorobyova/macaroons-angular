import {Component, inject, OnInit} from '@angular/core';
import {AdvantagesType} from "./types/advantages.type";
import {MacaroonsType} from "./types/macaroons.type";
import {ScrollService} from "./services/scroll.service";
import {MacaroonsService} from "./services/macaroons.service";
import {CartService} from "./services/cart.service";
import {AdvantagesService} from "./services/advantages.service";
import {FormValuesType} from "./types/form-values.type";
import {HotToastService} from "@ngneat/hot-toast";

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private toast = inject(HotToastService);
  constructor(private scrollService: ScrollService,
              private macaroonsService: MacaroonsService,
              private advantagesService: AdvantagesService,
              public cartService: CartService) {  }

  public advantages: AdvantagesType[] = []

  public macaroons: MacaroonsType[] = []

  public formValues: FormValuesType = {
    macaroonTitle: '',
    name: '',
    phone: ''
  }

  ngOnInit() {
    this.macaroons = this.macaroonsService.getMacaroons();
    this.advantages = this.advantagesService.getAdvantages();
  }

  public scrollTo(target: HTMLElement): void {
    this.scrollService.scrollTo(target);
  }

   addToCart(macaroon: MacaroonsType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.macaroonTitle = macaroon.title.toUpperCase();
    this.cartService.countQuantity++;
    this.cartService.countPrice += macaroon.price;
  }

  showAlert(message: string): void {
    alert(message);
  }

  public createOrder(): void {
    if (!this.formValues.macaroonTitle) {
      // alert('Выберите макарун, пожалуйста!');
      this.toast.warning('Выберите макарун, пожалуйста!', {duration: 1000});
      return;
    }
    if (!this.formValues.name) {
      this.toast.warning('Напишите, пожалуйста, ваше имя');
      return;
    }
    if (!this.formValues.phone) {
      this.toast.warning('Введите номер телефона')
      return;
    }

    this.toast.success('Ваш заказ успешно создан');

    this.formValues = {
      macaroonTitle: '',
      name: '',
      phone: '',
    }
  }

  cartShow: boolean = true;

}
