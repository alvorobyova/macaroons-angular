import { Component } from '@angular/core';
import {CommonVariablesType} from "../../types/common-variables.type";
import {CommonVariablesService} from "../../services/common-variables.service";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public phoneValue: CommonVariablesType;
  public link: CommonVariablesType;

  constructor(private commonVariablesService: CommonVariablesService) {
    this.phoneValue = commonVariablesService.phoneValue;
    this.link = commonVariablesService.link;
  }
}
