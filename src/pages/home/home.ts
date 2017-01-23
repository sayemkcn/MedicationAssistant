import { Component } from '@angular/core';

import { NavController, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { AddDrug } from '../add-new/add-drug';
import { IDrug } from '../../model/idrug';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [IDrug, Storage]
})
export class HomePage {
  druglist: IDrug[];

  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private storage: Storage) {

  }

  ionViewWillEnter() {
    this.storage.get("druglist").then(val => {
      this.druglist = val;
      // console.log(this.druglist);
    })
  }

  doRefresh(event){
    setTimeout(()=>{
      this.ionViewWillEnter();
      event.complete();
    },1000);
  }

  addNewButtonClick() {
    let modal = this.modalCtrl.create(AddDrug);
    modal.present();
  }

  editItem(drug: IDrug) {
    this.navCtrl.push(AddDrug, drug);
    // console.log(drug);
  }

  deleteItem(drug: IDrug) {
    this.showConfirmDeleteDialog(drug);
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

  showConfirmDeleteDialog(drug: IDrug) {
    let confirm = this.alertCtrl.create({
      title: 'Delete?',
      message: 'Do you really want to delete?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            for (let i = 0; i < this.druglist.length; i++) {
              if (this.druglist[i] != null && this.druglist[i].name == drug.name) {
                this.druglist[i] = null;
              }
            }
            this.storage.set("druglist", this.druglist);
          }
        }
      ]
    });
    confirm.present();
  }

}
