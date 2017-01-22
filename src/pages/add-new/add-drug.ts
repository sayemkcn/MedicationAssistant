import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';
import {Storage} from '@ionic/storage';

// import {Drug} from '../../model/drug';
import {IDrug} from '../../model/idrug';

@Component({
  selector: 'page-add-drug',
  templateUrl: 'add-drug.html',
  providers : [IDrug,Storage]
})
export class AddDrug {
  numbers : number[];
  druglist : IDrug[];
  
  constructor(private viewCtrl: ViewController,
              private drug : IDrug, 
              private storage: Storage) {}

  addDrugButtonClick(){
    console.log(this.drug);
    this.saveDrug(this.drug);
  }

  dismiss(): void{
    this.viewCtrl.dismiss();
  }

  medicationCountClick(){
    this.numbers = Array(this.drug.medicationCounter).fill(this.drug.medicationCounter).map((x,i)=>i+1)
    this.drug.times = new Array(this.drug.medicationCounter); // intialise array for binding
  }

  saveDrug(drug : IDrug){
    this.storage.get("druglist").then(val => {
      if(val===null){
        this.druglist = [];
      }else{
        this.druglist = val;
      }
      this.druglist.push(drug);
      // val.push(drug);
      this.storage.set("druglist",this.druglist);
    });
    this.viewCtrl.dismiss();
  }

}
