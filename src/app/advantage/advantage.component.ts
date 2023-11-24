import {Component, Input} from '@angular/core';
import {AdvantagesType} from "../types/advantages.type";

@Component({
  selector: 'advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent {
  @Input() advantage: AdvantagesType;

  constructor() {
    this.advantage = {
      number: 0,
      title: '',
      description: '',
    }
  }
}
