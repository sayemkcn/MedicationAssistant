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
  
  constructor(public viewCtrl: ViewController, private drug : IDrug) {

  }

  addDrugButtonClick(){
    console.log(this.drug);
  }

  dismiss(): void{
    this.viewCtrl.dismiss();
  }

}
