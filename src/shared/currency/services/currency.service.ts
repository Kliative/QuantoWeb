import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }
  loadExchangeRates(): Observable<any> {
    return this.http.get(`http://data.fixer.io/api/latest?access_key=${environment.fixer}`);
  }

}
