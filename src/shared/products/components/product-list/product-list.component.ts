import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/shared/currency/services/currency.service';
import { ExchangeModel } from 'src/shared/currency/models/currency.model';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

interface ProductList {
  product_name: string;
  price: string;
}

@Component({
  selector: 'quanto-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  currencyRates: ExchangeModel;
  convertedRate: number;
  inputNumber: number;
  base: string;
  dest: string;

  productList: ProductList[];
  productListRefresh: ProductList[];

  constructor(private _currensyService: CurrencyService) { }

  ngOnInit() {
    this.productList = [
      {
        'product_name': 'Meal, Inexpensive Restaurant',
        'price': '9000.'
      },
      {
        'product_name': 'Meal for 2 People, Mid-range Restaurant, Three-course',
        'price': '65000.'
      },
      {
        'product_name': 'McMeal at McDonalds (or Equivalent Combo Meal)',
        'price': '14000.'
      },
      {
        'product_name': 'Domestic Beer (0.5 liter draught)',
        'price': '2500.'
      },
      {
        'product_name': 'Imported Beer (0.33 liter bottle)',
        'price': '4000.'
      },
      {
        'product_name': 'Cappuccino (regular)',
        'price': '4277.78'
      },
      {
        'product_name': 'Coke/Pepsi (0.33 liter bottle)',
        'price': '1125.'
      },
      {
        'product_name': 'Water (0.33 liter bottle)',
        'price': '672.73'
      },
      {
        'product_name': 'Milk (regular), (1 liter)',
        'price': '2716.67'
      },
      {
        'product_name': 'Loaf of Fresh White Bread (500g)',
        'price': '1242.86'
      },
      {
        'product_name': 'Rice (white), (1kg)',
        'price': '2400.'
      },
      {
        'product_name': 'Eggs (regular) (12)',
        'price': '5160.'
      },
      {
        'product_name': 'Local Cheese (1kg)',
        'price': '13333.33'
      },
      {
        'product_name': 'Chicken Breasts (Boneless, Skinless), (1kg)',
        'price': '9800.'
      },
      {
        'product_name': 'Beef Round (1kg) (or Equivalent Back Leg Red Meat)',
        'price': '11000.'
      },
      {
        'product_name': 'Apples (1kg)',
        'price': '5800.'
      },
      {
        'product_name': 'Banana (1kg)',
        'price': '2100.'
      },
      {
        'product_name': 'Oranges (1kg)',
        'price': '3166.67'
      },
      {
        'product_name': 'omato (1kg)',
        'price': '2400.'
      },
      {
        'product_name': 'Potato (1kg)',
        'price': '1714.29'
      },
      {
        'product_name': 'Onion (1kg)',
        'price': '2200.'
      },
      {
        'product_name': 'Lettuce (1 head)',
        'price': '1000.'
      },
      {
        'product_name': 'Water (1.5 liter bottle)',
        'price': '1916.67'
      },
      {
        'product_name': 'Bottle of Wine (Mid-Range)',
        'price': '13500.'
      },
      {
        'product_name': 'Domestic Beer (0.5 liter bottle)',
        'price': '2375.'
      },
      {
        'product_name': 'Imported Beer (0.33 liter bottle)',
        'price': '3440.'
      },
      {
        'product_name': 'Cigarettes 20 Pack (Marlboro)',
        'price': '3000.'
      },
      {
        'product_name': 'One-way Ticket (Local Transport)',
        'price': '400.'
      },
      {
        'product_name': 'Monthly Pass (Regular Price)',
        'price': '35000.'
      },
      {
        'product_name': 'i Start (Normal Tariff)',
        'price': '5000.'
      },
      {
        'product_name': 'i 1km (Normal Tariff)',
        'price': '3000.'
      },
      {
        'product_name': 'i 1hour Waiting (Normal Tariff)',
        'price': '7000.'
      },
      {
        'product_name': 'Gasoline (1 liter)',
        'price': '2216.18'
      },
      {
        'product_name': 'Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car)',
        'price': '35000000.'
      },
      {
        'product_name': 'oyota Corolla 1.6l 97kW Comfort (Or Equivalent New Car)',
        'price': '18332285.97'
      },
      {
        'product_name': 'Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment',
        'price': '223891.41'
      },
      {
        'product_name': '1 min. of Prepaid Mobile Tariff Local (No Discounts or Plans)',
        'price': '325.'
      },
      {
        'product_name': 'Internet (60 Mbps or More, Unlimited Data, Cable/ADSL)',
        'price': '137494.76'
      },
      {
        'product_name': 'Fitness Club, Monthly Fee for 1 Adult',
        'price': '171495.29'
      },
      {
        'product_name': 'ennis Court Rent (1 Hour on Weekend)',
        'price': '44198.74'
      },
      {
        'product_name': 'Cinema, International Release, 1 Seat',
        'price': '12000.'
      },
      {
        'product_name': 'Preschool (or Kindergarten), Full Day, Private, Monthly for 1 Child',
        'price': '1279504.78'
      },
      {
        'product_name': 'International Primary School, Yearly for 1 Child',
        'price': '32727081.05'
      },
      {
        'product_name': '1 Pair of Jeans (Levis 501 Or Similar)',
        'price': '71426.33'
      },
      {
        'product_name': '1 Summer Dress in a Chain Store (Zara, H&M, ...)',
        'price': '73664.57'
      },
      {
        'product_name': '1 Pair of Nike Running Shoes (Mid-Range)',
        'price': '86000.'
      },
      {
        'product_name': '1 Pair of Men Leather Business Shoes',
        'price': '136000.'
      },
      {
        'product_name': 'Apartment (1 bedroom) in City Centre',
        'price': '998542.25'
      },
      {
        'product_name': 'Apartment (1 bedroom) Outside of Centre',
        'price': '882646.13'
      },
      {
        'product_name': 'Apartment (3 bedrooms) in City Centre',
        'price': '2995646.96'
      },
      {
        'product_name': 'Apartment (3 bedrooms) Outside of Centre',
        'price': '2378298.42'
      },
      {
        'product_name': 'Price per Square Meter to Buy Apartment in City Centre',
        'price': '2000000.'
      },
      {
        'product_name': 'Price per Square Meter to Buy Apartment Outside of Centre',
        'price': '1800000.'
      },
      {
        'product_name': 'Average Monthly Net Salary (After Tax)',
        'price': '825000.'
      },
      {
        'product_name': 'Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate',
        'price': '19.94'
      }
    ];

    this.productListRefresh = [
      {
        'product_name': 'Meal, Inexpensive Restaurant',
        'price': '9000.'
      },
      {
        'product_name': 'Meal for 2 People, Mid-range Restaurant, Three-course',
        'price': '65000.'
      },
      {
        'product_name': 'McMeal at McDonalds (or Equivalent Combo Meal)',
        'price': '14000.'
      },
      {
        'product_name': 'Domestic Beer (0.5 liter draught)',
        'price': '2500.'
      },
      {
        'product_name': 'Imported Beer (0.33 liter bottle)',
        'price': '4000.'
      },
      {
        'product_name': 'Cappuccino (regular)',
        'price': '4277.78'
      },
      {
        'product_name': 'Coke/Pepsi (0.33 liter bottle)',
        'price': '1125.'
      },
      {
        'product_name': 'Water (0.33 liter bottle)',
        'price': '672.73'
      },
      {
        'product_name': 'Milk (regular), (1 liter)',
        'price': '2716.67'
      },
      {
        'product_name': 'Loaf of Fresh White Bread (500g)',
        'price': '1242.86'
      },
      {
        'product_name': 'Rice (white), (1kg)',
        'price': '2400.'
      },
      {
        'product_name': 'Eggs (regular) (12)',
        'price': '5160.'
      },
      {
        'product_name': 'Local Cheese (1kg)',
        'price': '13333.33'
      },
      {
        'product_name': 'Chicken Breasts (Boneless, Skinless), (1kg)',
        'price': '9800.'
      },
      {
        'product_name': 'Beef Round (1kg) (or Equivalent Back Leg Red Meat)',
        'price': '11000.'
      },
      {
        'product_name': 'Apples (1kg)',
        'price': '5800.'
      },
      {
        'product_name': 'Banana (1kg)',
        'price': '2100.'
      },
      {
        'product_name': 'Oranges (1kg)',
        'price': '3166.67'
      },
      {
        'product_name': 'omato (1kg)',
        'price': '2400.'
      },
      {
        'product_name': 'Potato (1kg)',
        'price': '1714.29'
      },
      {
        'product_name': 'Onion (1kg)',
        'price': '2200.'
      },
      {
        'product_name': 'Lettuce (1 head)',
        'price': '1000.'
      },
      {
        'product_name': 'Water (1.5 liter bottle)',
        'price': '1916.67'
      },
      {
        'product_name': 'Bottle of Wine (Mid-Range)',
        'price': '13500.'
      },
      {
        'product_name': 'Domestic Beer (0.5 liter bottle)',
        'price': '2375.'
      },
      {
        'product_name': 'Imported Beer (0.33 liter bottle)',
        'price': '3440.'
      },
      {
        'product_name': 'Cigarettes 20 Pack (Marlboro)',
        'price': '3000.'
      },
      {
        'product_name': 'One-way Ticket (Local Transport)',
        'price': '400.'
      },
      {
        'product_name': 'Monthly Pass (Regular Price)',
        'price': '35000.'
      },
      {
        'product_name': 'i Start (Normal Tariff)',
        'price': '5000.'
      },
      {
        'product_name': 'i 1km (Normal Tariff)',
        'price': '3000.'
      },
      {
        'product_name': 'i 1hour Waiting (Normal Tariff)',
        'price': '7000.'
      },
      {
        'product_name': 'Gasoline (1 liter)',
        'price': '2216.18'
      },
      {
        'product_name': 'Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car)',
        'price': '35000000.'
      },
      {
        'product_name': 'oyota Corolla 1.6l 97kW Comfort (Or Equivalent New Car)',
        'price': '18332285.97'
      },
      {
        'product_name': 'Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment',
        'price': '223891.41'
      },
      {
        'product_name': '1 min. of Prepaid Mobile Tariff Local (No Discounts or Plans)',
        'price': '325.'
      },
      {
        'product_name': 'Internet (60 Mbps or More, Unlimited Data, Cable/ADSL)',
        'price': '137494.76'
      },
      {
        'product_name': 'Fitness Club, Monthly Fee for 1 Adult',
        'price': '171495.29'
      },
      {
        'product_name': 'ennis Court Rent (1 Hour on Weekend)',
        'price': '44198.74'
      },
      {
        'product_name': 'Cinema, International Release, 1 Seat',
        'price': '12000.'
      },
      {
        'product_name': 'Preschool (or Kindergarten), Full Day, Private, Monthly for 1 Child',
        'price': '1279504.78'
      },
      {
        'product_name': 'International Primary School, Yearly for 1 Child',
        'price': '32727081.05'
      },
      {
        'product_name': '1 Pair of Jeans (Levis 501 Or Similar)',
        'price': '71426.33'
      },
      {
        'product_name': '1 Summer Dress in a Chain Store (Zara, H&M, ...)',
        'price': '73664.57'
      },
      {
        'product_name': '1 Pair of Nike Running Shoes (Mid-Range)',
        'price': '86000.'
      },
      {
        'product_name': '1 Pair of Men Leather Business Shoes',
        'price': '136000.'
      },
      {
        'product_name': 'Apartment (1 bedroom) in City Centre',
        'price': '998542.25'
      },
      {
        'product_name': 'Apartment (1 bedroom) Outside of Centre',
        'price': '882646.13'
      },
      {
        'product_name': 'Apartment (3 bedrooms) in City Centre',
        'price': '2995646.96'
      },
      {
        'product_name': 'Apartment (3 bedrooms) Outside of Centre',
        'price': '2378298.42'
      },
      {
        'product_name': 'Price per Square Meter to Buy Apartment in City Centre',
        'price': '2000000.'
      },
      {
        'product_name': 'Price per Square Meter to Buy Apartment Outside of Centre',
        'price': '1800000.'
      },
      {
        'product_name': 'Average Monthly Net Salary (After Tax)',
        'price': '825000.'
      },
      {
        'product_name': 'Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate',
        'price': '19.94'
      }
    ];

    console.warn(this.productListRefresh);

    this._currensyService.loadExchangeRates().subscribe((response: ExchangeModel) => {
      this.currencyRates = response;
    });
  }


  convertToNumber(num: any): number {
    return num;
  }

  convertToUserCurrency(num: any, currency: string): number {
    return (1 / this.currencyRates.rates['TZS'] * num) * this.currencyRates.rates[currency];
  }

  convertOnSelect(): void {
    for (let index = 0; index < this.productList.length; index++) {
      this.productList[index].price = `${(1 / this.currencyRates.rates['TZS'] * +this.productList[index].price) * this.currencyRates.rates[this.base]}`;
    }
  }
}
