import {Component} from '@angular/core';
import {CommonVariablesType} from "../../types/common-variables.type";
import {CommonVariablesService} from "../../services/common-variables.service";
import {ScrollService} from "../../services/scroll.service";

// import {AppComponent} from "../app.component";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public isMenuOpen: boolean = false;

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public phoneValue: CommonVariablesType;

  constructor(private commonVariablesService: CommonVariablesService, private scrollService: ScrollService) {
    this.phoneValue = commonVariablesService.phoneValue;
  }

  scroll(sectionId: string) {
    const targetElement: HTMLElement | null = document.getElementById(sectionId);
    if (targetElement) {
      this.scrollService.scrollTo(targetElement);
    }
  }
}
