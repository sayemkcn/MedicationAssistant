import {Drug} from './drug';
import {Injectable} from '@angular/core';

@Injectable()
export class IDrug implements Drug{
    name : string;
    type : string;
    medicationCounter: number;
    times : Date[];
    days : number;
    comment : string;
}