import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { LimitCharacter } from '../models/limit-character.model';

export function stringIsNotEmptyOrNull(value: string, regex?: (val: string) => boolean): boolean {
    return value !== null && value !== undefined && value.trim() !== '' && (!regex || (regex(value)));
}

export function dateIsNotPast(value: Date, canBeNull: boolean): boolean {
    const today = new Date();
    if (canBeNull) {
        return value == null || value === undefined || value > today;
    } else {
        return value != null && value !== undefined && value > today;
    }
}
export function ArrayIsNotEmptyOrNull(value: string[]): boolean {
    return (
        value &&
        value.length > 0 &&
        value.findIndex((x) => x.trim().length === 0) < 0
    );
}

export function dateIsValid(value: Date): boolean {
    return value != null && value !== undefined;
}

export function NgbDateStructIsValid(date: NgbDateStruct): boolean {
    return date.day != null && date.day !== undefined &&
        date.month != null && date.month !== undefined &&
        date.year != null && date.year !== undefined;
}

export function NgbDateStructIsValidAndNotZeroValues(date: NgbDateStruct): boolean {
    return date.day != null && date.day !== undefined && date.day !== 0 &&
        date.month != null && date.month !== undefined && date.month !== 0 &&
        date.year != null && date.year !== undefined && date.year !== 0;
}

export function NgbDateStructExist(date: NgbDateStruct): boolean {
    return typeof date !== 'undefined' && date !== undefined && date != null;
}

export function getNewNumberLimit(count: number): LimitCharacter[] {
    return [{ character: '-', limit: 0 }, { character: '\\.', limit: 0 }, { character: ',', limit: 0 }, { character: '\\+', limit: 0 }, { character: 'e', limit: 0 }, { character: '^[0-9]', limit: count }];
}
