export class ExchangeModel {
    base: string;
    date: string;
    rates: RatesModel[];
    success: boolean;
    timestamp: number;
}

export class RatesModel {
    id: string;
    rate: number;
}
