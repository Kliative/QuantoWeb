import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';
import { stringIsNotEmptyOrNull } from './validation-checks';

export function NgbDateStructToString(struct: NgbDateStruct) {
    if (struct !== null && struct !== undefined) {
        let day = struct.day.toString();
        let month = struct.month.toString();
        if (day.length === 1) {
            day = '0' + day;
        }
        if (month.length === 1) {
            month = '0' + month;
        }
        return day + '-' + month + '-' + struct.year.toString();
    } else {
        return null;
    }
}

export function StringToNgbDateStruct(value: string): NgbDateStruct {
    if (stringIsNotEmptyOrNull(value)) {
        // tslint:disable-next-line:radix
        return { year: Number.parseInt(value.substr(6, 4)), month: Number.parseInt(value.substr(3, 2)), day: Number.parseInt(value.substr(0, 2)) };
    } else {
        return null;
    }
}

export function NgbDateStructToDate(struct: NgbDateStruct): Date {
    if (struct !== null && struct !== undefined) {
        return new Date(struct.year, struct.month - 1, struct.day);
    } else {
        return null;
    }
}

export function DateToNgbDateStruct(date: Date): NgbDateStruct {
    if (date !== null && date !== undefined) {
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    } else {
        return null;
    }
}

export function DateToString(date: Date): string {
    if (date !== null && date !== undefined) {
        let day = date.getDate().toLocaleString();
        let month = (date.getMonth() + 1).toLocaleString();
        if (day.length === 1) {
            day = '0' + day;
        }
        if (month.length === 1) {
            month = '0' + month;
        }
        return day + '-' + month + '-' + date.getFullYear();
    } else {
        return null;
    }
}
