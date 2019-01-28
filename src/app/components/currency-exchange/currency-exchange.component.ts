import { Component, OnInit } from '@angular/core';
import { ExchangeModel, RatesModel } from '../../../shared/currency/models/currency.model';
import { CurrencyService } from '../../../shared/currency/services/currency.service';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.scss']
})
export class CurrencyExchangeComponent implements OnInit {
  currencyRates: ExchangeModel;
  convertedRate: number;
  inputNumber: number;
  base: string;
  dest: string;

  constructor(private _currensyService: CurrencyService) {

  }
  ngOnInit(): void {
    this._currensyService.loadExchangeRates().subscribe((response: ExchangeModel) => {
      this.currencyRates = response;
    });
  }

  convert(): void {
    if (this.base && this.dest) {
      this.convertedRate = (1 / this.currencyRates.rates[this.base] * this.inputNumber) * this.currencyRates.rates[this.dest];
    }
  }
}
