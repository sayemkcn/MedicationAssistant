import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';
import { NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// import {Drug} from '../../model/drug';
import { IDrug } from '../../model/idrug';

@Component({
  selector: 'page-add-drug',
  templateUrl: 'add-drug.html',
  providers: [IDrug, Storage]
})
export class AddDrug {
  numbers: number[];
  druglist: IDrug[];
  paramDrugName : string;

  constructor(private viewCtrl: ViewController,
    private loadingCtrl: LoadingController,
    private navParams: NavParams,
    private drug: IDrug,
    private storage: Storage) {
    this.drug = this.navParams.data;
    this.paramDrugName = this.drug.name;
  }


  addDrugButtonClick() {
    // console.log(this.drug);
    this.saveDrug(this.drug);
  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }

  medicationCountClick() {
    this.numbers = Array(this.drug.medicationCounter).fill(this.drug.medicationCounter).map((x, i) => i + 1)
    this.drug.times = new Array(this.drug.medicationCounter); // intialise array for binding
  }

  saveDrug(drug: IDrug) {
    this.showLoading();
    this.storage.get("druglist").then(val => {
      if (val === null) {
        this.druglist = [];
      } else {
        this.druglist = val;
      }
      if (!this.paramDrugName) { // if nevparams is not empty then save new object
        this.druglist.push(drug);
        // console.log(this.druglist);
      } else { // edit object
        for (let i = 0; i < this.druglist.length; i++) {
          if (this.druglist[i] != null && this.druglist[i].name == this.paramDrugName)
            this.druglist[i] = this.drug;
        }
        // console.log(this.druglist);
      }

      // val.push(drug);
      this.storage.set("druglist", this.druglist);
    });
    this.viewCtrl.dismiss();
  }

  showLoading() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
}
