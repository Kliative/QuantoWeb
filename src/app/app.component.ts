import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/shared/currency/services/currency.service';
import { ExchangeModel } from 'src/shared/currency/models/currency.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'Quanto Web';

  currencyRates: ExchangeModel;

  constructor(private _currensyService: CurrencyService) {

  }
  ngOnInit(): void {
    this._currensyService.loadExchangeRates().subscribe((response: ExchangeModel) => {
      this.currencyRates = response;
    });
  }
}

