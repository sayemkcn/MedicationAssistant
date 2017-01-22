import {Drug} from './drug';
import {Injectable} from '@angular/core';

@Injectable()
export class IDrug implements Drug{
    name : string;
    type : string;
    times : Date[];
    days : number;
    comment : string;
}