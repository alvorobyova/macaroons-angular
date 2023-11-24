import { Injectable } from '@angular/core';
import {AdvantagesType} from "../types/advantages.type";

@Injectable()
export class AdvantagesService {

  constructor() { }

  getAdvantages(): AdvantagesType[] {
    return [
      {
        number: 1,
        title: 'Лучшие продукты',
        description: 'Мы честно готовим макаруны только из натуральных качественны продуктов. Мы не используем консерванты, ароматизаторы и красители.'
      },
      {
        number: 2,
        title: 'Много вкусов',
        description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
      },
      {
        number: 3,
        title: 'Бисквитное тесто',
        description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
      },
      {
        number: 4,
        title: 'Честный продукт',
        description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
      },
    ]
  }
}
