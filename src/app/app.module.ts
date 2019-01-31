import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import * as $ from 'jquery';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyExchangeComponent } from './components/currency-exchange/currency-exchange.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyExchangeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
