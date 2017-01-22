import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import {AddDrug} from '../add-new/add-drug';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private modalCtrl: ModalController) {

  }

  addNewButtonClick(){
    let modal = this.modalCtrl.create(AddDrug);
    modal.present();
  }

}
