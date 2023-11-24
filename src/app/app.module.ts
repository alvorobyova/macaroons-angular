import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {CommonVariablesService} from "./services/common-variables.service";
import {ScrollService} from "./services/scroll.service";
import {MacaroonsService} from "./services/macaroons.service";
import {AdvantageComponent} from './advantage/advantage.component';
import { CropTextPipe } from './pipes/crop-text.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { MacaroonComponent } from './components/macaroon/macaroon.component';
import {AdvantagesService} from "./services/advantages.service";
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { BtnBackgroundDirective } from './directives/btn-background.directive';
import { HotToastModule } from '@ngneat/hot-toast';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdvantageComponent,
    CropTextPipe,
    PhoneFormatPipe,
    MacaroonComponent,
    CurrencyFormatPipe,
    BtnBackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HotToastModule.forRoot()
  ],
  providers: [CommonVariablesService, ScrollService, MacaroonsService, AdvantagesService],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
