import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

// import {Drug} from '../../model/drug';
import {IDrug} from '../../model/idrug';

@Component({
  selector: 'page-add-drug',
  templateUrl: 'add-drug.html',
  providers : [IDrug]
})
export class AddDrug {
  numbers : number[];
  
  constructor(public viewCtrl: ViewController, private drug : IDrug) {
  
  }

  addDrugButtonClick(){
    console.log(this.drug);
  }

  dismiss(): void{
    this.viewCtrl.dismiss();
  }

  medicationCountClick(){
    this.numbers = Array(this.drug.medicationCounter).fill(this.drug.medicationCounter).map((x,i)=>i+1)
    this.drug.times = new Array(this.drug.medicationCounter); // intialise array for binding
    console.log(this.drug);
  }

}
