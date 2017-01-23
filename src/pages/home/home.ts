import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import {AddDrug} from '../add-new/add-drug';
import {IDrug} from '../../model/idrug';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [IDrug, Storage]
})
export class HomePage {
  druglist : IDrug[];

  constructor(public navCtrl: NavController,private modalCtrl: ModalController,private storage: Storage) {

  }

  ionViewWillEnter(){
    this.storage.get("druglist").then(val=>{
      this.druglist = val;
      // console.log(this.druglist);
    })
  }

  addNewButtonClick(){
    let modal = this.modalCtrl.create(AddDrug);
    modal.present();
  }

  editItem(drug : IDrug){
    this.navCtrl.push(AddDrug,drug);
    // console.log(drug);
  }

  deleteItem(drug : IDrug){
    console.log(drug);
  }

}
